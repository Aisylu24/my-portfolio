import React from 'react';
import s from './Main.module.scss'
import commonStyle from '../common/styles/Container.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={commonStyle.container}>
                <div className={s.text}>
                    <span>Welcome!</span>
                    <h1>I am Timirshina Aysylu</h1>
                    <p>Frontend Developer</p>
                    <div>
                        <span> Kazan, Tatarstan </span>
                        <FontAwesomeIcon icon={faLocationDot} className={s.locationIcon} />
                    </div>
                </div>

                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;