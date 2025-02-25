import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Sign Up")

  return <div className="Login-popup">
    <form className="login-popup-container">
      <div className="login-popup-title">
        <h2>{currState}</h2>
      </div>
    </form>
  </div>;
}
export default LoginPopup