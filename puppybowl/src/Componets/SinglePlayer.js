import React, { useState, useEffect } from 'react';





const SinglePlayer = ({puppy}) => {
   
   
    



    return(
        <div>
         <h1>{puppy.breed}</h1>
         <p>{puppy.name}</p>
         <img src={puppy.imageUrl}></img>
        </div>
    )
};

export default SinglePlayer;