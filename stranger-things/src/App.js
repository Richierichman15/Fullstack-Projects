import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/post" element={<Post />}></Route> 
      </Routes>
    </div>
  );
}

export default App;
