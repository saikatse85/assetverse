import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const EmployeeRoute = ({ children }) => {
  const user = useAuth();

  return user?.role === "employee" ? children : <Navigate to="/login" />;
};
export default EmployeeRoute;
