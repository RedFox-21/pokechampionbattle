function randPoke(){
    return Math.floor(Math.random() * 1010)
}

var listedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randPoke()}`)
.then(response => response.json())
   
  export default listedPokemon;