import React, { useEffect, useState } from 'react'
import { useAuth } from '../utils/AuthContext'
import { COLLECTION_CATEGORIES, DATABASEID, database } from '../Config/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import Loader from './loader';

import '../stylings/home.css';

const Home = () => {
  const { user, handleUserLogout } = useAuth();
  const [data, setData] = useState(null);
  const [searchReq, setSearchReq] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      await database.listDocuments(DATABASEID, COLLECTION_CATEGORIES).then(
        (promise) => {
          setData(promise.documents);
          setIsLoading(false);
          console.log(promise);
        }
      )


    }

    getCategories();
  }, [])
  if (isLoading) {
    return (
      <Loader />
    )
  }
  return (
      <div className="homepage-container">
      <div className="banner">
        <div className="banner-content">
          <h2>Discover the Latest Trends</h2>
          <p>Shop the latest fashion styles with ease and comfort.</p>
          <button className="shop-btn" onClick={(e) => {
            e.preventDefault();
            navigate('/search');
          }}>Shop Now</button>
        </div>
      </div>

      <div className="product-grid" >
        <h2>Featured Categories</h2>
        <div className="search-results">
          {data.map((val, index) => (
            <div key={index} className="search-item-grid">
              <div className="image-container" onClick={(e)=>{
        e.preventDefault();
        navigate('/search',{state:val.products})
      }}>
                <div
                  className="image-crop"
                  style={{
                    backgroundImage: `url(${val.imageurl})`,
                  }}
                ></div>
              </div>
              <div className="search-product-name">
                <p>{val.name}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <button onClick={(e)=>{
              e.preventDefault();
              console.log(data);
            }}></button> */}
      </div>
      </div>

  )
}

export default Home