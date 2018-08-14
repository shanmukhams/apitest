import React, { Component } from "react";
import "./header.css";

import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="bluestrip">
        <h1>API Test</h1>
      </div>
    );
  }
}

export default Header;