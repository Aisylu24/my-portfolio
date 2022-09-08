import React from 'react';
import s from './Footer.module.scss'
import commonStyle from "../common/styles/Container.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={`${commonStyle.container} ${s.footerContainer}`}>
                <div className={s.myName}>Timirshina Aysylu</div>
                <div className={s.socialNetworks}>
                    <div className={s.iconContainer}>
                        <FontAwesomeIcon icon={faAt} className={s.icons}/>
                        <div>firnatovna@mail.ru</div>
                    </div>
                    <div className={s.iconContainer}>
                        <a href={'https://github.com/Aisylu24'} className={s.link}>
                            <FontAwesomeIcon icon={faGithub} href={''} className={s.icons}/>
                            <div> github</div>
                        </a>
                    </div>
                    <div className={s.iconContainer}>
                        <FontAwesomeIcon icon={faWhatsapp} className={s.icons}/>
                        <div>+7(965)591-03-16</div>
                    </div>
                </div>
                <div className={s.rights}>© 2022 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;