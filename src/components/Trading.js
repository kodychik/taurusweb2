import {useRef} from "react";
import { useTranslation } from 'react-i18next';
import {FaBars, FaTimes } from "react-icons/fa";
import React from 'react';
import "../styles/main.css";
import wheat from '../assets/images/wheat.jpg';
import i18next from 'i18next';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function Trading(){
    const { t, i18 } = useTranslation();
    const animation = useAnimation();
    const [ref, inView, entry] = useInView({
    triggerOnce: false,
    });
    const aboutVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.3 },
    };
    useEffect(() => {
        if (inView) {
          animation.start("visible");
        } else {
            animation.start("hidden");
        }
      }, [animation, inView]);
    function handleClick(lang) {
        i18next.changeLanguage(lang);
    }

    return (
        <motion.div
            id="trading"
            className="aboutContainer"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={aboutVariant}
            >
            <div id="trading" className="HomeimageContainer">
                <img className="AboutImage" src={wheat} alt="SloganImage" /> 
                <h2 className="overlay-text-service">{t('Services.Trading.0')}</h2>
                
            </div>
            <div className="AboutSection">
                <div className="AboutText">
                        <p>{t('Services.Trading.1')}</p>
                        <hr />
                        <p>{t('Services.Trading.2')}</p>
                </div>
                
            </div>
            <div className="Trading">
                <div className="ServiceList">
                            <hr />
                            <p className="ServiceBold">{t('Services.Trading.Grains.0')}</p>
                            
                            <p>{t('Services.Trading.Grains.1')}</p>
                            <hr />
                </div>
                <div className="ServiceList">
                            <p className="ServiceBold">{t('Services.Trading.Metals.0')}</p>
                            
                            <p>{t('Services.Trading.Metals.1')}</p>
                            <hr />
                </div>
                <div className="ServiceList">
                            <p className="ServiceBold">{t('Services.Trading.Petrol.0')}</p>
                            
                            <p>{t('Services.Trading.Petrol.1')}</p>
                </div>
            </div>
            
        </motion.div>


        
        
       
    );
}

export default Trading