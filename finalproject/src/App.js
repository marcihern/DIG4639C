import React, { Component } from "react";
import "./App.css";
import Add from "./Components/Add";
import Contacts from "./Components/Contacts";
import Profile from "./Components/Profile";
import Remove from "./Components/Remove";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
      <p>

      </p>
        <Profile />
        <Add />
        <Contacts />
        <Remove />
      </div>
    );
  }
}

export default App;
