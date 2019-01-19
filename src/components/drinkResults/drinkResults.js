import React, { Component } from "react";
import "./drinkResults.css";
import PropTypes from "proptypes";
import barMainImg2 from "./bar-main-2.png";
import barMainImg from "./bar-main.png";

class DrinkResults extends Component {
  // onSubmit = () => {
  //   console.log(this.props.history);
  //   this.props.history.push("");
  // };
  renderRecipes() {
    return this.props.data.drinkRecipe.map(item => {
      return <div>{item}</div>;
    });
  }
  render() {
    return (
      <React.Fragment>
        {
          <div className="container">
            <div className="row">
              <div className="col-md-8 results">
                <h1 className="header" h1>
                  {this.props.header}
                </h1>
                <h2 className="drinkName">{this.props.data.drinkName}</h2>
                <div className="scroll">
                <div className="overflow">
                <h3 className="recipe">{this.renderRecipes()}{this.props.data.drinkInstructions}
                </h3>
                </div>
                </div>
              </div>

              <div className="col-md-2 results">
                <img
                  className="drink-pic"
                  alt=""
                  src={this.props.data.drinkImgURL}
                />
                <button
                  className="btn btn-danger new-drink"
                  onClick={this.props.onClickNewDrink}
                >
                  ASK FOR A DIFFERNT DRINK
                </button>
              </div>

              <div className="col-md-2 results">
                <img
                  className="profile-pic"
                  src={this.props.data.faceURL}
                  alt=""
                />
                <button
                  className="btn btn-danger new-photo"
                  onClick={this.props.onClickNewPhoto}
                >
                  SUBMIT A DIFFERENT PHOTO
                </button>
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
        }
      </React.Fragment>
    );
  }
}
DrinkResults.propTypes = {
  onClickNewPhoto: PropTypes.func,
  onClickNewDrink: PropTypes.func,
  faceURL: PropTypes.string,
  header: PropTypes.string,
  data: PropTypes.shape({
    drinkName: PropTypes.string,
    drinkInstructions: PropTypes.string,
    drinkImgURL: PropTypes.string,
    drinkRecipe: PropTypes.array
  })
};

export default DrinkResults;
