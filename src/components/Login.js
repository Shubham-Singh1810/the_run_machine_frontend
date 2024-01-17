import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loginApi} from "../services/user.service"
function Login({setShowScreen}) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const validateForm = () => {
    let isValid = true;
    const errors = {};
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginDetails.email || !emailRegex.test(loginDetails.email)) {
      isValid = false;
      toast.error("Please enter a valid email address")
    }
  
    // Validate password
    if (!loginDetails.password || loginDetails.password.length < 6) {
      isValid = false;
      toast.error("Password must be at least 6 characters long")
    }
    return isValid;
  };
  
  // Usage example in a form submission function:
  const handleLogin = async() => {  
    // Validate the form
    if (validateForm()) {
      try {
        let response = await loginApi(loginDetails);
        if(response?.data?.message=="The Run Machine Place welcomes You :)"){
          toast.success("The Run Machine Place welcomes You :)")
          setInterval(()=>{
            localStorage.setItem("the_run_machine_user", JSON.stringify(response?.data?.data));
            localStorage.setItem("the_run_machine_user_token", JSON.stringify(response?.data?.token));
            window.location.reload()
          },1000)
         
        }
        else{
          toast.error("Invalid Credintials")
        }
      } catch (error) {
        toast.error("Something went wrong")
      }
    } else {
      // Form is not valid, handle errors or display error messages
      console.log("Form is not valid");
    }
  };
  
  return (
    <div className="bg-dark text-light vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="fontRaleway mb-3">Login</h1>
        <div className="authForm">
          <div className="mb-3">
            <label className="mb-2">Email</label>
            <input
              onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
              className="form-control"
              placeholder="Please enter your Email"
            />
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <label className="mb-2">Password</label>
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={"mt-2 fa " + (showPassword ? "fa-eye" : "fa-eye-slash")}
              ></i>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <button className="btn btn-success w-100" onClick={handleLogin}>
              Log In
            </button>
          </div>
          <hr />
          <p className="fontMono text-center">
            Don't have an account? <u onClick={()=>setShowScreen("signUp")}>SignUp</u>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
