import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate("/login"); // Redirect unauthorized users
        }
    }, [navigate]);

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <button onClick={() => {
                localStorage.removeItem("isAuthenticated"); // Clear session on logout
                navigate("/login");
            }}>
                Logout
            </button>
        </div>
    );
};

export default Home;
