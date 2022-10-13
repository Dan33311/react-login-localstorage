import { useContext } from "react";
import FormContext from "../context/FormContext";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {

  const { email, loginDate, setIsLogin } = useContext(FormContext)
  const navigate = useNavigate()
  const stringLoginDate = loginDate.toString()

  return (
    <div className="user-container">
      {/* <h1>User Info:</h1> */}
      <div className="user">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h2>Username</h2>
      </div>
      <p className="p-email">{email}</p>
      <p>Last time Logged:</p>
      <p className="p-date">{stringLoginDate}</p>
      <button type="submit" className="form-button" onClick={() => { setIsLogin(true), navigate('/')}}>Logout</button>
    </div>
  );
}

export default UserInfo;