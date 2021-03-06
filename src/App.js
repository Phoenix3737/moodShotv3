import React, { Component } from "react";
import "./App.css";
import Landing from "./components/landing/landing.js";
import Directions from "./components/directions/directions.js";
import DrinkResults from "./components/drinkResults/drinkResults.js";
import Loading from "./components/loading/loading";
import axios from "axios";


const messages = [
  'You look afraid! Have a stong wiskey drink to calm your nerves.',
  'You look Sad! This tasty gin cocktail should cheer you up.',
  'You look Neutral!',
  'You look disgusted! Maybe a smooth scotch cocktail will make you feel better.',
  'You look Angry! A nice rum cocktail might feel like a needed vacation.',
  'You look Happy! Keep that going with a nice vodka cocktail.',
  'You look Surprised! A champagne based cocktail should go well with that.'
];

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      currentFaceUrl: "",
      isLoading: false,
      viewIndex: 0,
      header: "",
      drink: {
        drinkName: "",
        drinkInstructions: "",
        drinkImgURL: ""
      }
    };
  }

  onClickYes = () => {
    this.setState({
      viewIndex: 1,
    })
  }

  onClickNewDrink = () => {
    this.onSubmit(this.state.currentFaceUrl)
  }

  onClickNewPhoto = () => {
    this.setState({
      viewIndex: 1,
    })
  }

  onSubmit = (faceURL) => {
    this.setState({
      isLoading: true,
      currentFaceUrl: faceURL
    })
   
    let faceQuery =
      "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=otg0XdiKVDR9VMNBD4qfht2JThuOTgct&api_secret=MwhmO2tldAFKKIzMflz6QXLxXzYrEEIT&image_url=" +
      faceURL + "&return_attributes=emotion";

    // console.log(faceQuery);
    axios
      .post(faceQuery)
      .then(response => {
        const emotions = response.data.faces[0].attributes.emotion;
        this.setState({ emotions });
        console.log(emotions);
        function sortProperties(obj) {
          // convert object into array
          var sortable = [];
          for (var key in obj)
            if (obj.hasOwnProperty(key)) sortable.push([key, obj[key]]);

          // sort items by value
          sortable.sort(function(a, b) {
            return a[1] - b[1]; // compare numbers
          });
          // console.log(sortable.reverse());

          return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
        }
        const sortedEmotions = sortProperties(emotions);
        let queryAlc = "";
        let messageIndex = 0;
        const emotion = sortedEmotions[6][0];

        if (emotion === "fear") {
          queryAlc = "Whiskey";
        } else if (emotion === "sadness") {
          queryAlc = "Gin";
          messageIndex = 1;
        } else if (emotion === "neutral") {
          queryAlc = "";
          messageIndex = 2;
        } else if (emotion === "disgust") {
          queryAlc = "Scotch";
          messageIndex = 3;
        } else if (emotion === "anger") {
          queryAlc = "Rum";
          messageIndex = 4;
        } else if (emotion === "happiness") {
          queryAlc = "Vodka";
          messageIndex = 5;
        } else if (emotion === "surprise") {
          queryAlc = "Champagne";
          messageIndex = 6;
        }

        this.setState({
          header: messages[messageIndex]
        })


        // cocktailDB axios request

        let randomDrinkIndex;
        let queryRandomDrink;
        let queryIngredient;

        /////////////////////// This is where cocktaildb kicks in.
        queryIngredient =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
          queryAlc;
        const selectDrink= () =>  {
          console.log(queryIngredient);
          axios.post(queryIngredient).then(response => {
            console.log(response.data, "RESPONSE");
            randomDrinkIndex = Math.floor(
              Math.random() * [response.data.drinks.length -1]  + 1
            );
            console.log(randomDrinkIndex, "RANDOM DRINK INDEX");
            queryRandomDrink =
              "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
              response.data.drinks[randomDrinkIndex].idDrink;

            ////////////produce random number between one and index length.

            axios.post(queryRandomDrink).then(response => {
              console.log("next call", response);
              const drink = response.data.drinks[0];
              const drinkInstructions = drink.strInstructions;
              const drinkName = drink.strDrink;
              const drinkImgURL = drink.strDrinkThumb;
              console.log(drinkName);
              let drinkRecipe = [];
              let i = 1
              console.log(drink, 'DRINK');
              while (drink["strIngredient" + i]) {
                  drinkRecipe.push(drink["strMeasure" + i] + " - " + drink["strIngredient" +i]);
                  i++;

              };

              this.setState({
                drink: {
                  drinkName,
                  drinkInstructions,
                  drinkImgURL,
                  faceURL,
                  drinkRecipe
                },
                isLoading: false,
                viewIndex: 2
              });
            });
          });
        }

        selectDrink();
      })

      .catch(error => {
        this.setState({
          isLoading: false,
        })
        console.log(error);
      });
  };
  render() {
    console.log(this);
    return (
      <div className="App">
        {this.state.viewIndex === 0 && <Landing onClick={this.onClickYes}/>}
        {this.state.viewIndex === 1 && <Directions onSubmit={this.onSubmit} />}
        {this.state.viewIndex === 2 && 
          <DrinkResults 
            data={this.state.drink} 
            header={this.state.header} 
            onClickNewDrink={this.onClickNewDrink}
            onClickNewPhoto={this.onClickNewPhoto}
          />}
        {this.state.isLoading && <Loading />}
      </div>
    );
  }
}

export default App;
