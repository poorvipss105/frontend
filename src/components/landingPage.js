import React, { useState } from "react";
import SignupForm from "./statefull_auth/signup";
import LoginForm from "./statefull_auth/login";
import StatelessLoginForm from "./stateless_auth/tokenlogin";
import StatelessSignupForm from "./stateless_auth/tokenSignin";


const LandingPage = () => {
  const [showForm, setShowForm] = useState(null);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">MyApp</a>
          <div className="ml-auto d-flex gap-2">
            <button className="btn btn-outline-primary" onClick={() => setShowForm("login")}>Login (Stateful)</button>
            <button className="btn btn-primary" onClick={() => setShowForm("signup")}>Signup (Stateful)</button>
            <button className="btn btn-outline-secondary" onClick={() => setShowForm("statelessLogin")}>Login (Stateless)</button>
            <button className="btn btn-secondary" onClick={() => setShowForm("statelessSignup")}>Signup (Stateless)</button>
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
        {showForm === "statelessSignup" && <StatelessSignupForm />}
        {showForm === "statelessLogin" && <StatelessLoginForm />}
      </div>
    </div>
  );
};

export default LandingPage;
