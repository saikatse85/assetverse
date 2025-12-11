import useAuth from "../hooks/useAuth";

const HRRoute = ({ children }) => {
  const user = useAuth();

  return user?.role === "hr" ? children : <Navigate to="/login" />;
};
export default HRRoute;
