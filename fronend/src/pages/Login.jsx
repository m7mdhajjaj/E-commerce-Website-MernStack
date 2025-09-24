import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
   <form onSubmit={onSubmit} className="max-w-md mx-auto mt-20 flex flex-col items-center">
  <div className="mb-8 w-full text-center">
    <p className="text-3xl font-serif font-normal mb-2">{currentState} <span className="inline-block w-10 border-b border-gray-400 align-middle"></span></p>
  </div>
  {currentState === "Login" ? " " : <input
    type="text"
    placeholder="Name"
    className="w-full border border-gray-400 px-4 py-2 mb-4 rounded focus:outline-none"
  />}
  
  <input
    type="email"
    placeholder="Email"
    className="w-full border border-gray-400 px-4 py-2 mb-4 rounded focus:outline-none"
  />
  <input
    type="password"
    placeholder="Password"
    className="w-full border border-gray-400 px-4 py-2 mb-4 rounded focus:outline-none"
  />
  <div className="w-full flex justify-between items-center mb-4">
    <p className="text-sm text-gray-600">Forgot Password?</p>
    {
      currentState === "Login" ? (
        <p onClick={() => setCurrentState("Sign Up")} className=" text-sm text-gray-600 ">create an account? </p>
      ) : (
        <p onClick={() => setCurrentState("Login")} className="text-sm text-gray-600">login here </p>
      )
    }
  </div>
  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
    {currentState}
  </button>
</form>
  )
}

export default Login
