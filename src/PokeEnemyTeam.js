import React from "react";
import PokeCard from "./PokeCard";

var team = [];

for (var i = 0; i < 6; i++) {
    
    function randNum(max) {
    return Math.floor(Math.random() * max)
}

    var PokePick =
    await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum(1010)}`)
        .then(response => response.json()) 
    var member = <PokeCard PokePick={ PokePick }/>;
    team.push(member)
};

const PokeEnemyTeam = () => {
    return(
        <div>
            {team}
        </div>
    )
}

export default PokeEnemyTeam