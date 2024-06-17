import { Account } from 'appwrite';
import React, { useEffect } from 'react'
import client from '../Config/appwriteConfig';
import { useNavigate } from "react-router-dom";

const Verify = () => {
    const render=()=>{
        const navigate = useNavigate();
        const account = new Account(client)

        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get('secret');
        const userId = urlParams.get('userId');

        const promise = account.updateVerification(userId, secret).then(
          function(response){
            console.log('verfication done')
            navigate('/')
          }
        ).catch(
          function(error){
            console.log('verfication failed')
            alert('failed to verify')
            navigate('/signup')
          }
        )
    }
    useEffect(()=>{
        render();
    })

  return (
    <>verify</>
  )
}

export default Verify;
