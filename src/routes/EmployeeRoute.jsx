import useAuth from "../hooks/useAuth";

const EmployeeRoute = ({ children }) => {
  const user = useAuth();

  return user?.role === "employee" ? children : <Navigate to="/login" />;
};
export default EmployeeRoute;
