const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <form className="">
            <h2>Login</h2>

            <p>Login here using your username and password.</p>
            
            <label className="" >
              <input
                type="text"
                name="email"
                required='Please fill out this field.' 
                placeholder="Email address"
                maxLength="60" 
              />
            </label>

            <label className="" >
              <input
                type="password"
                name="pwd"
                required='Please fill out this field.' 
                placeholder="Password"
                maxLength="60"
              />
            </label>

            <button className="form-button">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;