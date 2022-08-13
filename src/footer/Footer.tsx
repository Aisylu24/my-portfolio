import React from 'react';
import s from './Footer.module.scss'
import commonStyle from "../common/styles/Container.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faLocationDot, faAt} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${commonStyle.container} ${s.footerContainer}`}>
<div className={s.myName}>Timirshina Aysylu</div>
                <div className={s.socialNetworks}>
                        <FontAwesomeIcon icon={faLocationDot} className={s.icons}/>
                        <FontAwesomeIcon icon={faAt} className={s.icons}/>
                        <FontAwesomeIcon icon={faGithub} href={''} className={s.icons}/>
                        <FontAwesomeIcon icon={faWhatsapp} className={s.icons}/>
                </div>
                <div className={s.rights}>© 2022 All rights reserved</div>
            </div>
        </div >
    );
};

export default Footer;