import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingPage';
import LoginForm from "./components/statefull_auth/login";
import Home from "./components/home/home";
import SignupForm from "./components/statefull_auth/signup";
import PrivateRoute from "./privateRoute";
import StatelessLoginForm from "./components/stateless_auth/tokenlogin";
import StatelessSignupForm from "./components/stateless_auth/tokenSignin";
import StatelessHome from "./components/home/statelessHome";

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/statelessLogin" element={<StatelessLoginForm/>} />
        <Route path="/statelessSignup" element={<StatelessSignupForm/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signin" element={<SignupForm/>} />
        
        <Route element={<PrivateRoute/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/statelessHome" element={<StatelessHome/>} />
      </Routes>
    </Router>
    </>
  );
}


export default App;
