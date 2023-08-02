import React, { Component } from "react";
import PokeCard from "./PokeCard1";
import PokeTeam from './PokeTeam'
import tachyons from 'tachyons';
import listedPokemon from "./listedPokemon"

class App extends Component {
  constructor(){
    super()
    this.state ={
      pokemon: {}
    }
  }

  render() {
    return(
      <div className="App">
          <PokeTeam />
      </div>
    )
  }
} 

export default App;
