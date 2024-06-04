import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Homepage from './pages/Homepage';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Navbar /> */}
      {/* <Post /> */}
      {/* <Homepage /> */}
      {/* <CreatePost /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
