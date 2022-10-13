import { useContext, useState } from "react";
import FormContext from "../context/FormContext";
import Swal from "sweetalert2";

const Login = () => {
  
  const actualDate = new Date()

  const {
    setLoginDate,
    setIsLogin,
    setEmail,
    setPassword,
  } = useContext(FormContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail(e.target.email.value)
    setPassword(e.target.password.value)
    // console.log(">actualDate:", actualDate);
    setLoginDate(actualDate)
    setIsLogin(true)

    // console.log('>email:', email);
    // console.log('>password:', password);
    // console.log('>loginDate:', loginDate);
    Swal.fire({
      title: 'Success',
      text: 'Success login',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }   

  // console.log('>>>email:', email);
  // console.log('>>>password:', password);
  // console.log('>>>loginDate:', loginDate);

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <p>Login here using your username and password.</p>

            <label className="" >
              <input
                type="email"
                name="email"
                // onChange={onChangeEmail}
                autoComplete="off"
                required='Please fill out this field.' 
                placeholder="Email address"
                maxLength="30"
              />
            </label>

            <label className="" >
              <input
                type="password"
                name="password"
                // onChange={onChangePassword}
                required='Please fill out this field.' 
                placeholder="Password"
                maxLength="10"
                minLength="4"
              />
            </label>

            <button type="submit" className="form-button">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;