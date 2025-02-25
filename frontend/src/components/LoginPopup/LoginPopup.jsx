import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Sign Up")

  return <div className="Login-popup">
    <form className="login-popup-container">
      <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-inputs">
        {currState==="login"?<></>:<input type="text" placeholder='Your name' required />}
        <input type="email" placeholder='Your email' required />
        <input type="password" placeholder='Password' required />
      </div>
      <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" />
        <p>By continuing, you agree to our Terms of Use and Privacy Policy</p>
      </div>
    </form>
  </div>;
}
export default LoginPopup