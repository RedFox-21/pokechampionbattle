import React from "react";

function randNum(max) {
    return Math.floor(Math.random() * max)
}

const PokeCard = ({PokePick}) =>{
    const { name, id, moves, types } = PokePick;
    return(
        <div className='tc grow bg-washed-red w-15 b3 pa3 ma2 dib bw3 shadow-5'>
            <img alt="pokesprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <h1>Name: {name}</h1>
            <h2>No. {id}</h2>
            <h2>Types: {types[0].type.name}</h2>
            <h3>Moves:</h3>
                <ul>
                    <li>{moves[randNum(moves.length)].move.name}</li>
                    <li>{moves[randNum(moves.length)].move.name}</li>
                    <li>{moves[randNum(moves.length)].move.name}</li>
                    <li>{moves[randNum(moves.length)].move.name}</li>
                </ul>
        </div>
    )
}

export default PokeCard;