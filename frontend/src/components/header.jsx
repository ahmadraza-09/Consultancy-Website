import React from 'react'
import '../css/header.css'
import { useState } from 'react'

const Header = () => {

    const [navbarsection, setNavbarSection] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbarSection(true);
        } else {
            setNavbarSection(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <>
      <div className={navbarsection ? 'navbar-section active' : 'navbar-section'}>
        <div className="contact-address-banner">
            <div className="contact-address-banner-left">
                <div className="contact-info">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:923-9348-193" target="_blank">923-9348-193</a>
                    {/* <button><a href="tel:923-9348-193" target="_blank">Call Now</a></button> */}
                </div>
                
                <div className="contact-info">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:ahmadraza20082003@gmail.com" target="_blank" >ahmadraza@gmail.com</a>
                    {/* <button><a href="mailto:ahmadraza20082003@gmail.com" target="_blank" >Email Now</a></button> */}
                </div>
            </div>
            <div className="contact-address-banner-right">
                <div className="contact-info">
                    <i class="fa-brands fa-instagram"></i>
                    |
                    <i class="fa-brands fa-whatsapp"></i>
                    |
                    <i class="fa-brands fa-linkedin-in"></i>
                    |
                    <i class="fa-brands fa-x-twitter"></i>
                </div>

            </div>
        </div>

        <div className="navbar">
            <input type="checkbox" id='check' checked={menuOpen} onChange={toggleMenu}/>
            <div className="logo-section">
                <h2 className='logo'>Job<span>Tech</span></h2>
            </div>
            <ul className="menu-section">
                <li>Home</li>
                <li>Service</li>
                <li>Industry Practices</li>
                <li>Job Seekers</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
            <div className="job-section">
                <button>Opening Jobs</button>
                <label className={menuOpen} htmlFor="check">
                    {menuOpen ? <i className="fa-solid fa-close"></i> : <i className="fa-solid fa-bars"></i>}
                </label>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header;
