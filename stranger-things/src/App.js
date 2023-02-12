import './App.css';
import Header from './Components/Header';
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Post from './Components/Post';
import Login from './Components/Login';
import Profile from './Components/Profile';
import NewPost from './Components/NewPost';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(window.localStorage.getItem('token'))
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/post" element={<Post isLoggedIn={isLoggedIn}/>}></Route> 
        <Route path='/post/add' element={<NewPost isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route> 
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn}/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
