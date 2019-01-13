import React, { Component } from "react";
import "./loading.css";
import barMainImg from "./bar-main.png";


class Loading extends Component {

  render() {
    return (
     
      <div className="container">
      <div className="loadingWrapper">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
      
      <div className="row">
        <div className="col-md-12">
          <img className="bar-main" src={barMainImg} alt="" />
        </div>
      </div>
    </div>
    
    );
  }
}

export default Loading;