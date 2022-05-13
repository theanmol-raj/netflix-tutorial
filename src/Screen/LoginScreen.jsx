import React from 'react'
import { Link } from "react-router-dom";
function LoginScreen({S}) {
  return (
    <div> <button onClick={()=>{S(true)}}> sign in</button> </div>
  )
}

export default LoginScreen