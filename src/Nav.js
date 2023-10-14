import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => { 
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll", handleShow);
        };

    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src = "https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Netflix Logo" />
        <img className='nav_avatar' src ="https://thumbs.dreamstime.com/b/icon-profile-color-green-circle-dark-background-white-not-shadow-194702093.jpg" alt="Netflix Logo" />

    </div>
  )
}

export default Nav