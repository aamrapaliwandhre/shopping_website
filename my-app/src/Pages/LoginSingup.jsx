import React from 'react'
import './CSS/loginsignup.css'

const LoginSingup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' name="" id="" />
          <input type="email" placeholder='Email Address' name="" id="" />
          <input type="password" placeholder='password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing,  I agree to terms & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup