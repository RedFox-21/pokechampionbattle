import React, { Component } from "react";
import PokeCard from "./PokeCard";
import tachyons from 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state ={
      pokemon: {}
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/73/')
      .then(response => response.json())
      .then(response => this.setState({ pokemon:response }))
  }

  render() {
    const { pokemon } = this.state
    return(
      <div className="App">
        <PokeCard pokemon={ pokemon }/>
      </div>
    )
  }
} 

export default App;
