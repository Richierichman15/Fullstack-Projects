import React, {useState, useEffect} from 'react'
import Header from './Componets/Header';
import Players from './Componets/Players';
import { Route, Routes } from 'react-router-dom';
import SinglePlayer from './Componets/SinglePlayer';


const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2207-FTB-ET-WEB-AM`

const App = ()  => {
  const [ players, setPlayers ] = useState([]);
  const [ puppy, setPuppy ] = useState([]);
  const [ search, setSearch ] = useState('');

  console.log(search);
  useEffect(() => {
    const fetchAllPlayers = async () => {

       try {
           const response = await fetch(`${APIURL}/players`);
           const result = await response.json();
           
           setPlayers(result.data.players)
       }  catch (error) {
           console.error('Uh oh, trouble fetching players!', error);
       }
   }; fetchAllPlayers();
   }, [])

  return (
    <>
    <Header setSearch={setSearch}/>
    <Routes>
      <Route path='/' element={<Players players={players} setPuppy={setPuppy}  search={search}/>}></Route>
      <Route path='/puppy/:id' element={<SinglePlayer puppy={puppy}/>}></Route>
    </Routes>
    </>
  );
}

export default App;
