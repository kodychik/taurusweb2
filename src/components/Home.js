import {useRef} from "react";
import { useTranslation } from 'react-i18next';
import {FaBars, FaTimes } from "react-icons/fa";
import React from 'react';
import "../styles/main.css";
import seaport from '../assets/images/seaport.jpg';
import sunset from '../assets/images/sunsetport.jpg';
import energy from '../assets/images/energyproduction.jpg';
import i18next from 'i18next';
import { Zoom, Fade } from "react-scroll-motion";
import Maps from './Maps';



function Home(){
    const { t, i18 } = useTranslation();
    function handleClick(lang) {
        i18next.changeLanguage(lang);
    }
    return (
        <>
            <div id="home" className="HomeimageContainer">
                <div className="imageTextContainer">
                    <img className="HomeImage" src={seaport} alt="SloganImage" /> 
                    <p className="homeoverlay-text one">{t('Home.1')}</p>
                </div>
                <div className="imageTextContainer">
                    <img className="HomeImage" src={sunset} alt="SloganImage" /> 
                    <p className="homeoverlay-text high">{t('Home.2')}</p>
                </div>
                <div className="imageTextContainer">
                    <img className="HomeImage" src={energy} alt="SloganImage" /> 
                    <p className="homeoverlay-text mid">{t('Home.3')}</p>
                </div>
        
            </div>
            <Maps/>
        </>
            


        
        
       
    );
}

export default Home