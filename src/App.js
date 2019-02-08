
import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";
import ChirpSubmit from "./components/ChirpSubmit";
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: [
        {
          name: "Matt",
          handle: "cook1619",
          body: "Chirp 1 Body"
        },
        {
          name: "Danelle",
          handle: "Playful1303",
          body: "Chirp 2 Body"
        },
        {
          name: "Jules",
          handle: "Imcute14",
          body: "Chirp 3 Body"
        }
      ]
    };

    this.handleClick = event => {
      let newChirp = {
        name: document.getElementById("inputNameField").value,
        handle: document.getElementById("inputHandleField").value,
        body: document.getElementById("inputBodyField").value
      };
      this.setState({
        chirps: this.state.chirps.concat([newChirp])
      });
    };
    this.handleSubmit = (event) => {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="container">
          <Header />
          <ChirpSubmit handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
          <CardList cardArray={this.state.chirps} />
      </div>
    );
  }
}

export default App;