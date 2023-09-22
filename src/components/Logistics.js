import {useRef} from "react";
import { useTranslation } from 'react-i18next';
import {FaBars, FaTimes } from "react-icons/fa";
import React from 'react';
import "../styles/main.css";
import fleet from '../assets/images/logisticsunset.jpg';
import i18next from 'i18next';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function Logistics(){
    const { t, i18 } = useTranslation();
    const animation = useAnimation();
    const [ref, inView, entry] = useInView({
    triggerOnce: false,
    });
    const aboutVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
    };
    useEffect(() => {

        if (inView) {
          animation.start("visible");
        } else {
            animation.start("visible");
        }
      }, [animation, inView]);


    return (
        <motion.div
            id="logistics"
            className="aboutContainer"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={aboutVariant}
            >
            <div id="logistics" className="HomeimageContainer">
                <img className="AboutImage" src={fleet} alt="SloganImage" /> 
                <h2 className="overlay-text-service">{t('Services.Logistics.0')}</h2>
                
            </div>
            
            <div className="Trading">
                <div className="ServiceList">
                    <hr />
                    <p className="ServiceBold">{t('Services.Logistics.Vessel.0')}</p>
                    <p>{t('Services.Logistics.Vessel.1')}</p>
                    <p>{t('Services.Logistics.Vessel.2')}</p>
                    <p>{t('Services.Logistics.Vessel.3')}</p>
                    <p>{t('Services.Logistics.Vessel.4')}</p>
                    <ul>
                        <li>{t('Services.Logistics.Vessel.5')}</li>
                        <li>{t('Services.Logistics.Vessel.6')}</li>
                        <li>{t('Services.Logistics.Vessel.7')}</li>
                        <li>{t('Services.Logistics.Vessel.8')}</li>
                        <li>{t('Services.Logistics.Vessel.9')}</li>
                    </ul>
                    
                    <p>{t('Services.Logistics.Vessel.10')}</p>
                    <p>{t('Services.Logistics.Vessel.11')}</p>
                    <hr />
                </div>
                <div className="ServiceList">
                            <p className="ServiceBold">{t('Services.Logistics.Stevedoring.0')}</p>
                            
                            <p>{t('Services.Logistics.Stevedoring.1')}</p>
                            <hr />
                </div>
                <div className="ServiceList">
                            <p className="ServiceBold">{t('Services.Logistics.Husbandry.0')}</p>
                            <p>{t('Services.Logistics.Husbandry.1')}</p>
                            <p>{t('Services.Logistics.Husbandry.2')}</p>
                            <p>{t('Services.Logistics.Husbandry.3')}</p>
                            <ul>
                                
                                <li>{t('Services.Logistics.Husbandry.Crew.0')}</li>
                                <li>{t('Services.Logistics.Husbandry.CTM.0')}</li>
                                <li>{t('Services.Logistics.Husbandry.Spare.0')}</li>
                            </ul>
                            <hr />
                </div>
                <div className="ServiceList">
                            <p className="ServiceBold">{t('Services.Logistics.Consulting.0')}</p>
                            <p>{t('Services.Logistics.Consulting.1')}</p>
                            <p>{t('Services.Logistics.Consulting.2')}</p>
                            <p>{t('Services.Logistics.Consulting.3')}</p>
                            <hr />                            
                </div>
            </div>
            
        </motion.div>


        
        
       
    );
}

export default Logistics