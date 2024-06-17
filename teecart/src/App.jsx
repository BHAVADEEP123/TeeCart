import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './utils/AuthContext';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/Signup';
import Verify from './components/verify';
import Profile from './components/profile';
function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/verify' element={<Verify />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
