import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Players = ({players, setPuppy, search}) => {


       

    const SinglePlayerView = (puppy) => {
        setPuppy(puppy);
    };

    return(
        <>
        {
            players.length ? 
            players.filter((player) => { if(search === '') {return player} else
                if(player.name.includes(search) || player.breed.includes(search)) {return player}}).map((player, i) => {
                return(
                    <div key={i}>
                    <li key={i}></li>
                    <div>
                        <h1>{player.breed}</h1>
                        <p>{player.name}</p>
                        <img src={player.imageUrl}></img>
                        <Link to={`/puppy/${player.id}`} onClick={SinglePlayerView(player)}>See Details</Link>
                    </div>
                    </div>
                )
            })
            : null
        }
        </>
    )
}

export default Players;