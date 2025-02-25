import { useState } from 'react';
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Sign Up")
  
  return <div className="Login-popup">
    <form className="login-popup-container">
      <div className="login-popup-title">
      </div>
    </form>
  </div>;
}
export default LoginPopup