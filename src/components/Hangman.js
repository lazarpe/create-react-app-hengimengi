import React, { Component } from "react";
import "./Hangman.css";
import { randomWord } from "./Words.js";

import { getData } from "./Login.js";

//import Login from "./Login.js";
import Logout from "./Logout";

import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6],
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      points: 0,
      mistake: 0,
      guessed: new Set([]), //like an arraylist to save guessed letters
      answer: randomWord(),
      hintPrice: 50,
      winPoints: 25,
    };
  }

  handleGuess = (e) => {
    let letter = e.target.value;
    this.setState((st) => ({
      points:
        st.points + (st.answer.includes(letter) ? this.state.winPoints : 0),
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
    setTimeout(() => {
      document.getElementById("points").innerHTML = this.state.points;
    }, 0);
  };

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        className="btn btn-lg btn-primary m-2"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  /**
   * reset button sets mistakes to 0, clears the arraylist of guesses and generates a new random word
   */
  resetButton = () => {
    this.setState({
      count: 50,
      mistake: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
    this.componentWillUnmount();
    this.doIntervalChange();
    document.getElementById("hintBtn").style.visibility = "visible";
  };

  showHint = () => {
    var hint = Array.from(this.state.answer.split(""));
    do {
      var randomLetter = hint[Math.floor(Math.random() * hint.length)];
    } while (this.state.guessed.has(randomLetter));
    if (this.state.points >= this.state.hintPrice) {
      this.setState({
        points: this.state.points - this.state.hintPrice,
      });
      //this.guessedWord();
      alert("Why dont you try: ".concat(randomLetter));
    } else {
      alert("You dont have enough points");
    }
    document.getElementById("points").innerHTML = this.state.points;
  };

  componentDidMount() {
    const { startCount } = this.props;
    this.setState({
      count: startCount,
    });
    this.doIntervalChange();
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
      //console.log("Time left".concat(this.state.count));
      if (this.state.count === 0) {
        this.resetButton();
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    // if (auth2.isSignedIn.get()) {
    //   var profile = auth2.currentUser.get().getBasicProfile();
    //   console.log("ID: " + profile.getId());
    //   console.log("Full Name: " + profile.getName());
    //   console.log("Given Name: " + profile.getGivenName());
    //   console.log("Family Name: " + profile.getFamilyName());
    //   console.log("Image URL: " + profile.getImageUrl());
    //   console.log("Email: " + profile.getEmail());
    // }

    const { count } = this.state;
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      document.getElementById("hintBtn").style.visibility = "hidden";
      gameStat = "You won!";
    }

    if (gameOver) {
      document.getElementById("hintBtn").style.visibility = "hidden";
      gameStat = "";
      this.componentWillUnmount();
    }

    /*const responseGoogle = (response) => { 
      console.log(response);
    };*/

    return (
      <div className="Hangman container">
        <h1 className="text-center">Hangman</h1>
        {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}

        {/* <div>
  <p>email: {getInformation()}</p>
</div> */}

        <div className="text-center">
          Wrong guesses: {this.state.mistake} of {this.props.maxWrong}
        </div>
        <div>
          <p>Time left: {count}</p>
        </div>
        <br></br>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt="" />
        </div>
        <br></br>
        <div className="text-center">
          <p>Guess the word:</p>
          <div id="magicWord">
            <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
          </div>
          <div>
            Your points: <p id="points">{this.state.points}</p>
          </div>

          <br></br>
          <p>{gameStat}</p>
          <div id="hintBtn">
            <button className="btn btn-success" onClick={this.showHint}>
              Hint ({this.state.hintPrice} points)
            </button>
          </div>
          <div id="resetBtn">
            <button className="btn btn-info" onClick={this.resetButton}>
              Reset
            </button>
          </div>
          {/* <div id="userdata">
            <p id="profiledata"></p>
          </div> */}
          <iframe
            width="100%"
            height="100%"
            src="https://leaderboard.davidemarcoli.de"
          ></iframe>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Hangman;
