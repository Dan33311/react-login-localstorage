import { useContext, useState } from "react";
import FormContext from "../context/FormContext";

const Login = () => {
  
  const actualDate = new Date()

  const {
    loginDate,
    setLoginDate,
    email,
    setEmail,
    password,
    setPassword
  } = useContext(FormContext)

  const handleSubmit = (e, date) => {
    e.preventDefault()
    setEmail(e.target.email.value)
    setPassword(e.target.password.value)
    console.log(">actualDate:", actualDate);
    // if(email && password) {
      setLoginDate(actualDate)
    // }
    console.log('>email:', email);
    console.log('>password:', password);
    console.log('>loginDate:', loginDate);
    // alert('Login success')
  }   

  console.log('>>>email:', email);
  console.log('>>>password:', password);
  console.log('>>>loginDate:', loginDate);

  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <p>Login here using your username and password.</p>

            <label className="" >
              <input
                type="text"
                name="email"
                // onChange={onChangeEmail}
                autoComplete="off"
                required='Please fill out this field.' 
                placeholder="Email address"
                maxLength="60" 
              />
            </label>

            <label className="" >
              <input
                type="password"
                name="password"
                // onChange={onChangePassword}
                // required='Please fill out this field.' 
                placeholder="Password"
                maxLength="60"
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