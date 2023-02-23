import './App.css';
import Header from './Components/Header';
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Posts from './Components/Posts';
import Login from './Components/Login';
import Profile from './Components/Profile';
import NewPost from './Components/NewPost';
import View from './Components/View';
import Edit from './Components/Edit';
import Message from './Components/Message';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(window.localStorage.getItem('token'))
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route> 
        <Route path="/posts" element={<Posts isLoggedIn={isLoggedIn}/>}></Route> 
        <Route path='/post/add' element={<NewPost isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route> 
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn}/>}></Route> 
        <Route path="/post/edit" element={<Edit isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/post/view/:id" element={<View isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/post/message" element={<Message isLoggedIn={isLoggedIn}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
