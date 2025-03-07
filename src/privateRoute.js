import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;