import React from "react";


const PokeCard = ({ pokemon }) => {
    const { name, types } = pokemon;
    return (
        <div className='tc grow bg-washed-red b3 pa3 ma2 dib bw2 shadow-5'>
            <img alt="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"/>
            <h1>Name: {name}</h1>
            <h2>Type: {}</h2>
            <h2>Moves: </h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
};

export default PokeCard;