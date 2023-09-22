import {useRef} from "react";
import { useTranslation } from 'react-i18next';
import {FaBars, FaTimes } from "react-icons/fa";
import React from 'react';
import "../styles/main.css";
import aboutimg from '../assets/images/rules.jpg';
import cargo from '../assets/images/cargocrates.jpg';
import i18next from 'i18next';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function CodeOfConduct(){
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
            animation.start("visible");
        }
      }, [animation, inView]);

    function handleClick(lang) {
        i18next.changeLanguage(lang);
    }
    return (
        <motion.div
            id="codeofconduct"
            className="aboutContainer"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={aboutVariant}
            >
            <div id="codeofconduct" className="aboutContainer">
            <div className="imageContainer">
                <img className="AboutImage" src={aboutimg} alt="AboutImage" />
                <h2 className="overlay-text-service">{t('Code.0')}</h2>
                
            </div>
            <div className="Trading">
                <div className="ServiceList">
                    <hr />
                    <p>{t('Code.1')}</p>
                    <hr />
                    <p className="ServiceBold">{t('Code.Labour.1')}</p>
                    <p>{t('Code.Labour.1,1')}</p>
                    <p>{t('Code.Labour.1,2')}</p>
                    <p>{t('Code.Labour.1,3')}</p>
                    <p>{t('Code.Labour.1,4')}</p>
                    <p>{t('Code.Labour.1,5')}</p>
                    <hr />        
                    <p className="ServiceBold">{t('Code.Labour.2')}</p>
                    <p>{t('Code.Labour.2,1')}</p>
                    <p>{t('Code.Labour.2,2')}</p>
                    <hr /> 
                    <p className="ServiceBold">{t('Code.Labour.3')}</p>
                    <p>{t('Code.Labour.3,1')}</p>
                    <p>{t('Code.Labour.3,2')}</p>
                    <hr /> 
                    <p className="ServiceBold">{t('Code.Labour.4')}</p>
                    <p>{t('Code.Labour.4,1')}</p>
                    <p>{t('Code.Labour.4,2')}</p>
                    <p>{t('Code.Labour.4,3')}</p>
                </div>
            </div>
            
            </div>
        </motion.div>
            

       
        

        
        
       
    );
}

export default CodeOfConduct