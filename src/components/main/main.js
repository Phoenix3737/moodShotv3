import React, { Component } from "react";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <div>
              <div className="row">
                  <div className="col-md-12">
                    <img
                      className="bar-main"
                      src={require("./bar-main.png")}
                      alt=""/>
                  </div>
                </div>
            </div>
        }
      </React.Fragment>
    );
  }
}

export default Main;