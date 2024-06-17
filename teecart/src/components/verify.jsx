import { Account } from 'appwrite';
import React, { useEffect } from 'react'
import client from '../Config/appwriteConfig';


const Verify = () => {
    const render=()=>{
        const account = new Account(client)

        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get('secret');
        const userId = urlParams.get('userId');

        const promise = account.updateVerification(userId, secret);
    }
    useEffect(()=>{
        render();
    })

  return (
    <>verify</>
  )
}

export default Verify;
