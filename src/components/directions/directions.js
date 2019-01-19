import React, { Component } from "react";
import PropTypes from "proptypes";
import "./directions.css";
import barMainImg2 from "./bar-main-2.png";
import barMainImg from "./bar-main.png";




class Directions extends Component {
  constructor() {
    super()
    this.state = {
      faceUrl: ""
    }
  }
  updateInput = e => {
    this.setState({
      faceUrl: e.target.value
    })
  }
  render() {
    return (
      
          <section id="directions">
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 directions">
                    <h1>
                      Step 1 - Place a link to your photo below then
                      sumbit.......
                    </h1>
                    <h1>
                      Step 2 - The virtual bartender will analysis your
                      mood.......
                    </h1>
                    <h1>
                      Step 3 - The perfect drink for your mood will be revealed.
                    </h1>
                    <h1>
                      Step 4 - Follow the drink recipe and enjoy. Bottoms up!!!!
                    </h1>
                  </div>
                </div>

                <div className="row center-url">
                  <div className="col-md-12">
                    <div className="center-url">
                      <div>
                        <input
                          id="link-url"
                          className="col-md-8 url"
                          type="text"
                          name="picture"
                          placeholder="PLACE URL HERE"
                          onChange={this.updateInput}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger btn-sumbit"
                        onClick={() => {this.props.onSubmit(this.state.faceUrl)}}
                        disabled={!this.state.faceUrl}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <img
                      className="facebook"
                      src={require("./facebook.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="container">
              <div className="row">
                <div className="col-md-12">
                <img className="bar-main" src={barMainImg} alt="" />
                  <img className="bar-main-2" src={barMainImg2} alt="" />
                </div>
              </div>
            </div>
              </div>
            </div>
          </section>
        
    );
  }
}

Directions.propTypes = {
  onSubmit: PropTypes.func
}

export default Directions;
