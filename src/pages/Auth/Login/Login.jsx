import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthContext"; // adjust path
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { signIn, googleLogin, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setResetMessage("");

    try {
      await signIn(data.email, data.password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Reset Password Function
  const handleResetPassword = async () => {
    const email = document.getElementById("resetEmail").value;
    if (!email) return setError("Enter your email first!");

    try {
      await resetPassword(email);
      setResetMessage("Password reset link sent to your email!");
    } catch {
      setError("Failed to send reset email!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-base-100 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-600 dark:text-gray-200">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="font-semibold dark:text-gray-200">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
              placeholder="your@email.com"
              id="resetEmail"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold dark:text-gray-200">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full"
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        {resetMessage && (
          <p className="text-green-500 text-center mt-3">{resetMessage}</p>
        )}

        {/* 🔹 Forgot Password */}
        <p className="text-center mt-4">
          <button
            className="text-blue-600 underline"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </button>
        </p>

        {/* OR Divider */}
        <div className="divider">OR</div>

        {/* 🔥 Google Login */}
        <button
          onClick={googleLogin}
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5"
          />
          Continue With Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link to="/join-employee" className="text-blue-600 underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
