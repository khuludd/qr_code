import React, { Component } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.css";
class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;
    characters.splice(index, 1);
    this.setState({
      characters: [...characters]
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>QR Code</h1>

        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Générer un code</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
