import React from "react";
import logoImg from "../assests/logo_new.png";
function Header() {
  return (
    <div className="nav">
      <div className="header">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="button-section">
          <button className="btn-p">Start Free Trial</button>
          <button className="btn-lg">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
