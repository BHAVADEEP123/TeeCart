import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  COLLECTION_CATEGORIES,
  DATABASEID,
  database,
} from "../Config/appwriteConfig";
import "../stylings/search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faBars,
  faTimes,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../utils/AuthContext";

const Search = () => {
  const { user } = useAuth();
  const location = useLocation();
  const rcv_data = location.state;
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [showProducts, setShowProducts] = useState(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const getCategories = async () => {
      await database
        .listDocuments(DATABASEID, COLLECTION_CATEGORIES)
        .then((promise) => {
          setData(promise);
          let products = [];
          for (let i = 0; i < promise["documents"].length; i++) {
            products.push(...promise["documents"][i]["products"]);
          }
          console.log("products", products);
          setShowProducts(products);
        });
    };
    if (!rcv_data) {
      getCategories();
    }
  }, []);
  return (
    <div className="search-container">
      <div className="search-input">
        <div className={`search-page-links ${isMenuOpen ? "open" : ""}`}>
          <a href="/" className="search-link">
            Home
          </a>
          <a href="#about" className="search-link">
            About
          </a>
        </div>
        <div className={`search-page-search ${isMenuOpen ? "open" : ""}`}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            style={{
              transform: "translateX(-40px)",
              transition: "transform 0.3s ease",
              margin: "auto",
              fontSize: "25px",
              cursor: "pointer",
            }}
          />
          <div className="search-menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </div>

        <div className={`search-page-links ${isMenuOpen ? "open" : ""}`}>
          <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
          <FontAwesomeIcon
            icon={faUser}
            className="navbar-icon"
            onClick={(e) => {
              e.preventDefault();
              navigate("/profile");
            }}
          />
          {user && (
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="navbar-icon"
              onClick={(e) => {
                e.preventDefault();
                handleUserLogout();
              }}
            />
          )}
          {!user && (
            <FontAwesomeIcon
              icon={faSignInAlt}
              className="navbar-icon"
              onClick={navigate("/login")}
            />
          )}
        </div>
      </div>
      <hr />
      <div className="search-heading">
          Top search
      </div>
      <div className="search-results">
        
          {showProducts.map((val,index)=>(
          <div key={index} className="search-item-grid">
            {val.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
