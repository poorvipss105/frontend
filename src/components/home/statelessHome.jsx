import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StatelessHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate("/statelessLogin"); // Redirect unauthorized users
        }
    }, [navigate]);

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <button onClick={() => {
                localStorage.removeItem("isAuthenticated"); // Clear session on logout
                navigate("/statelessLogin");
            }}>
                Logout
            </button>
        </div>
    );
};

export default StatelessHome;
