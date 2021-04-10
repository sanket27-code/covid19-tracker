import React from 'react';
import logo from '../Images/covid-logo.png';
import './Logo.css'

const Logo = () => {
    return(
        <>
             <div className='Logo'>
                 <img src={logo} alt='Covid_img'></img>
             </div>
        </>
    )
}

export default Logo;