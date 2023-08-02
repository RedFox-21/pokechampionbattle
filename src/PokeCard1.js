import React from "react";
import listedPokemon from "./listedPokemon";
// function randPoke(){
//     return Math.floor(Math.random() * 1010)
// }

// var listedPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randPoke()}`)
// .then(response => response.json())

const PokeCard1 = () => {
    const { name, types, id, moves } = listedPokemon;
    function randNum(max) {
        return Math.floor(Math.random() * max);
    }
    return (
        <div className='tc grow bg-light-blue fl w-third b3 pa3 ma2 dib bw2 shadow-5'>
        <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        <h1>Name: {name.toUpperCase()}</h1>
        <h2>Type: {types[0].type.name.toUpperCase()} </h2>
        <h2 className="tl">Moves: </h2>
        <ul>
            <li className="tl">{moves[randNum(moves.length)].move.name.toUpperCase()}</li>
            <li className="tl">{moves[randNum(moves.length)].move.name.toUpperCase()}</li>
            <li className="tl">{moves[randNum(moves.length)].move.name.toUpperCase()}</li>
            <li className="tl">{moves[randNum(moves.length)].move.name.toUpperCase()}</li>
        </ul>
    </div>
    )
};

export default PokeCard1;