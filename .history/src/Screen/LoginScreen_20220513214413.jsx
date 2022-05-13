import React from 'react'

function LoginScreen({S}) {
  return (
    <div> <button onClick={()=>{S(true)}}> signup</button></div>
  )
}

export default LoginScreen