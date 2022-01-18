import React from "react";

import Hangman from "./components/Hangman";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Hangman startCount="50" />
        <Footer />
      </div>
    );
  }
}

export default App;
