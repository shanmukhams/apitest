import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/header.jsx";
import History from "./components/history/history.jsx";
import API from "./components/api/api.jsx";
import Response from "./components/response/response.jsx";

class App extends Component {
  constructor(){
    super();
  }

  state = {
    response:{}
  };

  handleResponse = (data) =>{
    let response = this.state.response;
    response=data;
    this.setState({response});
    console.log(response);
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-9">
            <API onResponse={this.handleResponse}/>
          </div>
          <div className="col-3">
            <History />
          </div>
        </div>
        <div className="row">
          <Response value={this.state.response}/>
        </div>
      </div>
    );
  }
}

export default App;
