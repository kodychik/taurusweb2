import {useRef} from "react";
import { useTranslation } from 'react-i18next';
import {FaBars, FaTimes } from "react-icons/fa";
import React from 'react';
import "../styles/main.css";
import aboutimg from '../assets/images/sunsetship.jpg';
import cargo from '../assets/images/cargocrates.jpg';
import i18next from 'i18next';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function About(){
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
            id="about"
            className="aboutContainer"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={aboutVariant}
            >
            <div id="about" className="aboutContainer">
            <div className="imageContainer">
                <img className="AboutImage" src={aboutimg} alt="AboutImage" />
                <h2 className="overlay-text">{t('AboutUs.0')}</h2>
                
            </div>
            <div className="AboutSection">
                <div className="AboutText">
                        <p>{t('AboutUs.1')}</p>
                        <hr />
                        <p>{t('AboutUs.2')}</p>
                        <hr />
                        <p>{t('AboutUs.3')}</p>
                        <hr />
                        <p>{t('AboutUs.4')}</p>
                        <hr />
                        <p>{t('AboutUs.5')}</p>
                </div>

                
                
            </div>
            
            </div>
        </motion.div>
            

       
        

        
        
       
    );
}

export default About