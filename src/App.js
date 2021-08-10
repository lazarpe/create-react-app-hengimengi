import React from "react";
import { Route, Switch } from "react-router-dom";

import Hangman from "./components/Hangman";
import Footer from "./components/Footer";
import Settings from "./components/Settings.js";
import Navigation from "./components/Navbar";
import { ThemeProvider } from "react-bootstrap";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/settings" component={Settings} />
        </Switch>
        <Hangman startCount="50" />
        {/* <Leaderboard /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
