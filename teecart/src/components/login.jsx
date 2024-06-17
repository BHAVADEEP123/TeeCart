
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylings/login.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import client from '../Config/appwriteConfig';
import { Account } from 'appwrite';
import { useAuth } from '../utils/AuthContext';

const Login = () => {
  const { user, handleUserLogin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, []);
  const account = new Account(client);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email" />
          <input type="email" placeholder='Email-id' onChange={(e) => { setUserEmail(e.target.value) }} />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password" />
          <input type="password" placeholder='Password' onChange={(e) => { setUserPassword(e.target.value) }} />
        </div>
      </div>
      <div className="Old-User">
        Already a User? <span onClick={() => navigate('/signup')}>Click Here to Sign Up!</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={(e) => { handleUserLogin(e, userEmail, userPassword) }}>
          login
        </div>
      </div>
    </div>
  );
}

export default Login;
