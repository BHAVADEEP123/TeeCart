
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylings/login.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import client from '../Config/appwriteConfig';
import { Account } from 'appwrite';

const Login = () => {
  const navigate = useNavigate();
  const account = new Account(client);
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response = await account.createEmailPasswordSession('test@test.test','password');
    console.log('response from server',response);
  }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email" />
          <input type="email" placeholder='Email-id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div className="Old-User">
        Already a User? <span onClick={() => navigate('/signup')}>Click Here to Sign Up!</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handlesubmit}>
          login
        </div>
      </div>
    </div>
  );
}

export default Login;
