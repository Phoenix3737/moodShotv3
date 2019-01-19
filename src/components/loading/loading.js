import React, { Component } from "react";
import "./loading.css";
import barMainImg2 from "./bar-main-2.png";
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
          <img className="bar-main-2" src={barMainImg2} alt="" />
        </div>
      </div>
    </div>
    
    );
  }
}

export default Loading;