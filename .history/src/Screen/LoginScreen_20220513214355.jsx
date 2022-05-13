import React from 'react'

function LoginScreen({S}) {
  return (
    <div> <button onClick={()=>{S(true)}}></button></div>
  )
}

export default LoginScreen