import React, { useState } from "react";
import SignupForm from "./statefull_auth/signup";
import LoginForm from "./statefull_auth/login";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(null);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">MyApp</a>
          <div className="ml-auto">
            <button className="btn btn-outline-primary me-2" onClick={() => setShowForm("login")}>
              Login
            </button>
            <button className="btn btn-primary" onClick={() => setShowForm("signup")}>
              Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center mt-5">
        <h1>Landing Page</h1>
      </div>

      {/* Render Forms Conditionally */}
      <div className="container mt-4">
        {showForm === "signup" && <SignupForm />}
        {showForm === "login" && <LoginForm />}
      </div>
    </div>
  );
};

export default LandingPage;