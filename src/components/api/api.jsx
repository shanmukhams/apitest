import React, { Component } from "react";
import "./api.css";

import "bootstrap/dist/css/bootstrap.css";

class API extends Component {
  constructor(){
    super();

  }
  
  state = {
    requests : ['GET','POST','PUT'],
    headers : [{id:1,key:null, value:null}],
    apirequest : {
      request:null,
      url:'',
      headers:''
    },
    data:''
  };

  requestClicked = (request)=>{
    let apirequest = Object.assign({},this.state.apirequest);
    apirequest.request=request;
    this.setState({apirequest});
    console.log(apirequest) 
  };

  handleURLInput = (event)=>{
    let apirequest = Object.assign({},this.state.apirequest);
    apirequest.url=event.target.value;
    this.setState({apirequest});
  }

  handleHeaderKeyChange = (event,id)=>{
    var headers=this.state.headers;
    for(var i in headers)
    {
      if(headers[i].id===id){
        headers[i].key=event.target.value;
      }
    }
    this.setState(headers);
  }

  handleHeaderValueChange = (event,id)=>{
    var headers=this.state.headers;
    if(id===this.state.headers.length){
        headers.push({
          id:this.state.headers.length+1,
          key:null,
          value:null
        })
    }
    for(var i in headers)
    {
      if(headers[i].id===id){
        headers[i].value=event.target.value
      }
    }
    this.setState(headers);
    console.log(this.state.headers);
  }

  send = () =>{
    fetch(this.state.apirequest.url,
    {
      method:this.state.apirequest.request,
      headers:{'Content-Type':'application/json'}
    }
  ).then(response=>response.json()).then(json => this.setState(this.state.data=json));
  this.props.onResponse(this.state.data);
  console.log(this.state.data);
  }

  render() {
    return (
      <div className="api">
        
        <div className="dropdown m-2">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="requests" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.apirequest.request==null ? 'Select Request':this.state.apirequest.request}
          </button>
          <div className="dropdown-menu" aria-labelledby="requests">
            {this.state.requests.map(request=><a className="dropdown-item" href="#" key={request} onClick={()=>this.requestClicked(request)}>{ request }</a>)}
          </div>
        </div>      

        <div className="input-group m-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="url">URL</span>
          </div>
          <input type="text" value={this.state.apirequest.url} onChange={(event)=>this.handleURLInput(event)} className="form-control" placeholder="URL" aria-label="url" aria-describedby="url"/>
        </div>

        <div>
          <div className="container">Headers</div>
          <table className="table table-borderless">
            <thead className="thead">
              <tr>
                <th scope="col">Key</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {this.state.headers.map(header=><tr key={header.id}>
                <th><input type="text" value={header.key} key={header.id} onChange={(event)=>this.handleHeaderKeyChange(event,header.id)} className="headerKey"/></th>
                <td><input type="text" value={header.value} key={header.id} onChange={(event)=>this.handleHeaderValueChange(event,header.id)} className="headerValue"/></td>
              </tr>)}
              
              
              
            </tbody>
          </table>
        </div>


        {this.state.apirequest.request=='GET' || this.state.apirequest.request==null?<div/>:
        <div className="input-group m-2">
          <div className="input-group-prepend">
            <span className="input-group-text">Body</span>
          </div>
          <textarea className="form-control"></textarea>
        </div>}
        
        <div className="send" onClick={()=>this.send()}>Send</div>



      </div>
    );
  }
}

export default API;