import React, { Component } from 'react';
import Card from "./components/Card";
import cards from "./cards.json";
import './App.css';
import Wrapper from "./components/Wrapper";


class App extends Component {
  state = {
    cards,
    score: 0
  };

  setClicked = (id) => {

     const cards = this.state.cards;
     let score = this.state.score;

     //create new array consisting of the clicked card, found by filtering cards array by id
     const cardClicked = cards.filter(card => card.id === id);

     if (cardClicked[0].clicked){
     
      alert("You already clicked that character! Better luck next time");

      //reset score
         score = 0;

      //reset cards in array to be "not clicked" 
         for (let i = 0 ; i < cards.length ; i++){
             cards[i].clicked = false;
         }
      //update state   
         this.setState({cards});
         this.setState({score});


     } else if (score < 11) {

      //set card with clicked id to "clicked"  
         cardClicked[0].clicked = true;

      //increase score by 1  
         score = score + 1;

      //a method of random shuffling I found online  
         cards.sort(function(){return 0.5 - Math.random()});

      //update state     
         this.setState({cards});
         this.setState({score});

     } else {

      alert("You won!");

      //set card with id clicked to "clicked"
         cardClicked[0].clicked = true;

     //reset score
         score = 0;

      //reset cards in array to be "not clicked"   
         for (let i = 0 ; i < cards.length ; i++){
             cards[i].clicked = false;
         }

      //shuffle array   
         cards.sort(function(){return 0.5 - Math.random()});

      //update state   
         this.setState({cards});
         this.setState({score});

     }
 };

  render() {
    return (
      <div className="App">
            <div className="navbar navbar-default" id="navcolor">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-right" id="navscore">
            <li id="score">Score: {this.state.score}</li>
          </ul>
          <ul className="nav navbar-nav navbar-left" id="navscore">
            <h3 id="title">Twin Peaks Clicky Game</h3>
          </ul>
        </div>
      </div>
        <header className="App-header">
          <h4 id="instructions">Click on an image to earn points, but don't click on an image more than once!</h4>
        </header>
       <Wrapper>
       {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
            setClicked={this.setClicked}
          />
        ))}
  </Wrapper>
        </div>
    );
  }
}

export default App;
