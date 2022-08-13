import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to={PATH.HOME}>Home </NavLink>
            <NavLink to={PATH.SKILLS}>Skills</NavLink>
            <NavLink to={PATH.PROJECTS}>Projects </NavLink>
            <NavLink to={PATH.CONTACT}>Contact</NavLink>
        </div>
    );
};

export default Nav;