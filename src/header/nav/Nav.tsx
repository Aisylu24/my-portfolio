import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to={PATH.HOME}  className={s.link}>HOME</NavLink>
            <NavLink to={PATH.SKILLS} className={s.link}>SKILLS</NavLink>
            <NavLink to={PATH.PROJECTS} className={s.link}>PROJECTS </NavLink>
            <NavLink to={PATH.CONTACT} className={s.link}>CONTACT</NavLink>
        </div>
    );
};

export default Nav;