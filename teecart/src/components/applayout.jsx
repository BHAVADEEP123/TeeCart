import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

import '../stylings/applayout.css'

const Applayout = ({ children }) => {
    const location = useLocation();
    const showNavbarAndFooter = location.pathname !=='/search';
    // showNavbarAndFooter = location.pathname !== '/signup';
    return (
        <div className='layout-container'>
            <div className='layout-nav'>
                {showNavbarAndFooter && <Navbar/>}
            </div>
            <div className='layout-main'>
                {children}
            </div>
            <div className='layout-footer'>
                {showNavbarAndFooter && <Footer/> }
            </div>
        </div>
    )
}

export default Applayout