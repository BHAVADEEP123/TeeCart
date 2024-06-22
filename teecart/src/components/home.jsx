import React from 'react'
import { useAuth } from '../utils/AuthContext'
import { COLLECTION_CATEGORIES, DATABASEID, database } from '../Config/appwriteConfig';

const Home = () => {
  const {user,handleUserLogout} = useAuth();
  const getCategories = async()=>{
    const promise = await database.listDocuments(DATABASEID,COLLECTION_CATEGORIES);
    console.log('categories',promise);
  }
  return (
    <>
    home <br />
    <button onClick={handleUserLogout}>logout</button>
    <button onClick={getCategories}>categories</button>
    </>
    
  )
}

export default Home