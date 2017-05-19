import React, { Component } from 'react';

const Header = () => {
  return(
    <header>
      <div className="left">
      </div>
      <div className="right">
        <button type="button" id="signup">Sign Up</button>
        <button type="button" id="signin">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
