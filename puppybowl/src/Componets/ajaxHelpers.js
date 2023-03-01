import React from 'react'



const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2207-FTB-ET-WEB-AM`


 export const fetchAllPlayers = async () => {

    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        if (result.error) {
            throw result.error
        }
        return result.data.players
    }  catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
    }
};

 export const fetchSinglePlayer = async (playerId) => {

    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        if (result.error) {
            throw result.error
        }
        
    } catch (error) {
        console.error(error)
    }
};

 export const addNewPlayer = async (playerObj) => {

    try {
        const response = await fetch(`${APIURL}/players`, {
        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify
        });
        const result = await response.json();
    }   catch (err) {
        console.error(err);
    }
};

 export const removePlayer = async (playerId) => {
    fetch(`${APIURL}/players`, { 
        method: 'DELETE'
    });
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.log(result);
    }   catch (err) {
        console.error(err);
    };
 };



