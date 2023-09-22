import {FaBars, FaTimes } from "react-icons/fa";
import {useRef} from "react";
import React from 'react';
import "../styles/main.css";
import "../styles/navbar.css";
import taurus from '../assets/images/taurus-logo.png';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import About from './About';
import Service1 from './Trading';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const { t, i18n } = useTranslation();
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
        window.scrollTo(0, 0);

    }

    function handleClick(lang) {
        i18next.changeLanguage(lang);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };


    return (
            <header id="navbar" className={navbar ? 'the-header active' : 'the-header'}>
                
                <a href="/#home">
                    <img className="logo" src={taurus} alt="Taurus Logo" />
                </a>
                

                <nav ref={navRef}>
                    <Link to="/about" onClick={showNavBar}>{t('AboutUs.0')}</Link>
                    <div className="dropdown-container">
                        <a href="/">
                            {t('Services.0')}   &#9660; 
                        </a>
                        
                        <div className={navbar ? "service-dropdown big" :"service-dropdown transparent"}>
                        <Link to="/trading" onClick={showNavBar}>{t('Services.Trading.0')}</Link>
                        <Link to="/logistics" onClick={showNavBar}>{t('Services.Logistics.0')}</Link>
                        </div>
                    
                    </div>
                    <Link to="/codeofconduct" onClick={showNavBar}>{t('Code.0')}</Link>
                    <Link to="/careers" onClick={showNavBar}>{t('Careers.0,1')}</Link>
                    <a href="/#">Contact Us</a>
                    <button className="langButtons" onClick={() => handleClick('en')}>
                        EN
                    </button>
                    <button className="langButtons" onClick={() => handleClick('chi')}>
                        简
                    </button>

                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavBar}>
                    <FaBars />
                </button>
                    
                
            </header>
        
    );
}

export default Navbar