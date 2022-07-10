import React from 'react';
import s from './Footer.module.css'
import commonStyle from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${commonStyle.container} ${s.footerContainer}`}>
<h3>Timirshina Aysylu</h3>
                <div className={s.socialNetworks}>
                    <div className={s.socialNetworksItems}></div>
                    <div className={s.socialNetworksItems}></div>
                    <div className={s.socialNetworksItems}></div>
                    <div className={s.socialNetworksItems}></div>
                </div>
                <div className={s.rights}>© 2022 All rights reserved</div>
            </div>
        </div >
    );
};

export default Footer;