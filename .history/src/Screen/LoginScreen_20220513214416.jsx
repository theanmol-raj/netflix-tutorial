import React from 'react'

function LoginScreen({S}) {
  return (
    <div> <button onClick={()=>{S(true)}}> sign in</button></div>
  )
}

export default LoginScreen