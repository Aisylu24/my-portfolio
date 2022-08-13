import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to={PATH.HOME}  className={s.link}>Home </NavLink>
            <NavLink to={PATH.SKILLS} className={s.link}>Skills</NavLink>
            <NavLink to={PATH.PROJECTS} className={s.link}>Projects </NavLink>
            <NavLink to={PATH.CONTACT} className={s.link}>Contact</NavLink>
        </div>
    );
};

export default Nav;