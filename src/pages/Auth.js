import React from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import VerifyOtp from '../components/VerifyOtp'
import {useState, useEffect} from "react"
function Auth() {
  const[showScreen, setShowScreen]=useState("login")
  return (
    <div>
      {showScreen=="login" && <Login setShowScreen={setShowScreen}/>}
      {showScreen=="signUp" && <SignUp setShowScreen={setShowScreen}/>}
      {showScreen=="otp" && <VerifyOtp setShowScreen={setShowScreen}/> }
    </div>
  )
}

export default Auth