import { useState } from "react";
import OtpInput from "react-otp-input";
import {VerifyOtpApi} from "../services/user.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const verifyOtpFunc = async()=>{
    try {
      let response = await VerifyOtpApi({otp:otp, email:localStorage.getItem("tempEmail")});
      if(response?.data?.message=="The Run Machine Place welcomes You :)"){
          toast.success(response?.data?.message);
          console.log(response.data)
          localStorage.setItem("the_run_machine_user", JSON.stringify(response?.data?.data));
          localStorage.setItem("the_run_machine_user_token", JSON.stringify(response?.data?.token));
          window.location.reload()
      }
      else{
        toast.error("Wrong Otp")
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }
  return (
    <div className="bg-dark text-light vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="fontRaleway mb-3">OTP</h1>
        <div className="authForm">
          {showMessage && (
            <div className="bg-warning fontCursive text-dark p-2 rounded mb-3">
              <div className="d-flex justify-content-between">
                <p className="mb-0">We have send an otp on your mail.</p>
                <i className="mt-1 text-danger fa fa-close" onClick={() => setShowMessage(false)}></i>
              </div>
              <p className="mb-0">Please enter the otp correctly to register successfully</p>
            </div>
          )}
          <h1 style={{fontSize:"42px"}}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<div className="mx-1"></div>}
              renderInput={(props) => <input {...props} />}
            />
          </h1>
          <hr />
          <button className="btn btn-info" onClick={verifyOtpFunc}>Verify Otp</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default VerifyOtp;
