import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylings/Signup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { account } from '../Config/appwriteConfig'; 

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlesubmit = async () => {
    try {
      const user = await account.create('unique()', email, password, username);
      console.log('User created successfully:', user);
      alert("New user has been created!");
      // const sesssionPromise = account.createEmailPasswordSession()
      const promise1 = await account.createEmailPasswordSession(email, password).then(
        function(response){
          console.log('success1:',response)
        }
      ).catch(
        function (error){
          console.log('failed1:',error);
        }
      );
      const promise2 = await account.createVerification('http://localhost:5173/verify').then(
        function(response){
          console.log('success2:',response)
        }
      ).catch(
        function (error){
          console.log('failed2:',error);
        }
      )
      
      
    } catch (error) {
      console.error('Error creating user:', error.message);
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User" />
          <input type="text" placeholder='Name' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input">
          <img src={email_icon} alt="Email" />
          <input type="email" placeholder='Email-id' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password" />
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="Old-User">
        Already a Registered User? <span onClick={() => navigate('/login')}>Click Here to Login!</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handlesubmit}>Sign Up</div>
      </div>
    </div>
  );
}

export default Signup;
