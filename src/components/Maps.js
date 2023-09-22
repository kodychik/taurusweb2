import React, {useState} from "react";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Maps() {
    const { t, i18 } = useTranslation();

    return (
        <p className="mapsContainer">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1491219469963!2d114.18586147698318!3d22.31019937005621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400df2215b55b%3A0x502012e919ffe958!2sKaiser%20Estate%20Phase%203%2C%2018%20Man%20Lok%20St%2C%20Hok%20Yuen%2C%20Hong%20Kong!5e0!3m2!1sen!2sca!4v1695342678054!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{border:"0"}}
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mapText">
                <p className="mapText Bold">Meet Us</p>
                <hr/>
                <p className="mapText">{t('Address.0')}</p>
            </p>
        </p>
    );
}