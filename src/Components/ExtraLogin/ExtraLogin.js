import React from 'react';
import twitterIcon from "../../Assets/twitter.svg";
import facebookIcon from "../../Assets/facebook.svg";
import googleIcon from "../../Assets/google.svg";
import './ExtraLogin.css';

function ExtraLogin() {
    return (
      <div className="extra-login-container">
        <p> Or Login with</p>
        <div className="login-links-container">
          <a href="#" className="twitter-logo"><img src={twitterIcon} alt='twitter-logo'></img></a>
          <a href="#" className="facebook-logo"><img src={facebookIcon} alt='facebook-logo'></img></a>
          <a href="#" className="google-logo"><img src={googleIcon} alt='google-logo'></img></a>
        </div>
      </div>
    );
}

export default ExtraLogin;