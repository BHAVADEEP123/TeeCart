

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';

import Home from './components/home';
import Login from './components/login';
import Signup from './components/Signup';
import Verify from './components/verify';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/verify' element={<Verify />} />
        
      </Routes>
    </Router>
  );
}

export default App;
