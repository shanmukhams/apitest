import React, { Component } from "react";
import "./response.css";

import "bootstrap/dist/css/bootstrap.css";

class Response extends Component {
    state = {

    };

    render() {
      if(this.props.value!=''){
        console.log(this.props.value);
      }
      return (
        <div><h1>Response:</h1>
        <pre>{JSON.stringify(this.props.value, null, 2) }</pre>
        </div>
      );
    }
  }
  
  export default Response;