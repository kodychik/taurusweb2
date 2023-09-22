import {useRef} from "react";
import { useTranslation } from 'react-i18next';
import {FaBars, FaTimes } from "react-icons/fa";
import React from 'react';
import "../styles/main.css";
import bb from '../assets/images/mybb.jpg';
import cargo from '../assets/images/cargocrates.jpg';
import i18next from 'i18next';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function Careers(){
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
            id="careers"
            className="aboutContainer"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={aboutVariant}
            >
            <div id="careers" className="aboutContainer">
            <div className="imageContainer">
                <img className="AboutImage" src={bb} alt="AboutImage" />
                <h2 className="overlay-text">{t('Careers.0')}</h2>
                
            </div>
            <div className="AboutSection">
                <div className="AboutSection Careers">
                        <p>{t('Careers.1')}</p>
                        <hr />
                        <p>{t('Careers.2')}</p>
                        <hr />
                </div>

                
                
            </div>
            
            </div>
        </motion.div>
            

       
        

        
        
       
    );
}

export default Careers