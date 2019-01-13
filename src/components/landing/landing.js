import React, { Component } from "react";
import "./landing.css";
import PropTypes from "proptypes";
import barLandingImg from "./bar-landing.png"


class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 welcome">
                  <h1>WELCOME TO MOODSHOT</h1>
                </div>
                <div className="col-md-12 twenty-one">
                  <h2>ARE YOU 21 OR OLDER?</h2>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-danger btn-yes" onClick={this.props.onClick}>YES</button>
                  <a href="https://www.responsibility.org/" className="btn btn-default btn-no">NO</a>
                </div>
              </div>
            </div>

            <div className="row">
              <div >
                <img className="bar-landing" src={barLandingImg} alt="" />
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}
Landing.propTypes = {
  onClick: PropTypes.func
}
export default Landing;

