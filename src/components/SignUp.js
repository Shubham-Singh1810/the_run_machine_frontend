import { useState } from "react";
import { signUp } from "../services/user.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp({setShowScreen}) {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    password: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    userName: "",
  });

  const formValidation = () => {
    let isValid = true;

    // Reset errors
    setErrors({
      name: "",
      email: "",
      password: "",
      userName: "",
    });

    if (!user.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      isValid = false;
    }

    if (!user.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid Email" }));
      isValid = false;
    }

    if (!user.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    } else if (user.password.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password length must be more than 5",
      }));
      isValid = false;
    }

    if (!user.userName.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "User Name is required",
      }));
      isValid = false;
    }

    return isValid;
  };
  const [showLoader, setShowLoader] = useState(false);
  const handleSignUp = async () => {
    setShowLoader(true);
    const isValid = formValidation();

    if (isValid) {
      try {
        let response = await signUp(user);
        if (response?.data?.message == "This email is already registered") {
          toast.error("This email is already registered");
        } else {
          setShowScreen("otp")
          localStorage.setItem("tempEmail", user.email)
          toast.success(response?.data?.message)
        }
        setShowLoader(false);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setShowLoader(false);
    } else {
      // Display validation errors
      console.error("Form validation errors:", errors);
      setShowLoader(false);
    }
  };

  return (
    <div className="bg-dark text-light vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="fontRaleway mb-3">Sign Up</h1>
        <div className="authForm">
          <div className="mb-3">
            <label className="mb-2">
              Full Name<i>*</i>
            </label>
            <input
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="form-control"
              placeholder="Please enter your Name"
            />
            <p className="text-danger fontRaleway font12">{errors.name}</p>
          </div>
          <div className="mb-3">
            <label className="mb-2">
              Email<i>*</i>
            </label>
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
              placeholder="Please enter your Email"
            />
            <p className="text-danger fontRaleway font12">{errors.email}</p>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <label className="mb-2">
                Password<i>*</i>
              </label>
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={"mt-2 fa " + (showPassword ? "fa-eye" : "fa-eye-slash")}
              ></i>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="form-control"
              placeholder="Enter Password"
            />
            <p className="text-danger fontRaleway font12">{errors.password}</p>
          </div>
          <div className="mb-4">
            <label className="mb-2">
              User Name<i>*</i>
            </label>
            <input
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              className="form-control"
              placeholder="Enter User Name"
            />
            <p className="text-danger fontRaleway font12">{errors.userName}</p>
          </div>
          <div className="mb-4">
            {showLoader ? (
              <div className="d-flex justify-content-center">
                <div class="spinner-border text-center text-light" role="status"></div>
                <span class="mt-1 ms-2">Performing sign up...</span>
              </div>
            ) : (
              <button onClick={handleSignUp} className="btn btn-primary w-100">
                Create Account
              </button>
            )}
          </div>
          <hr />
          <p className="fontMono text-center">
            Already have an account? <u  onClick={()=>setShowScreen("login")}>Login</u>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
