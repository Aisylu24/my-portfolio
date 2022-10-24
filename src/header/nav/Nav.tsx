import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";


const Nav = () => {
    return (
        <div className={s.nav}>
            <Link activeClass={s.active}
                  duration={500}
                  offset={-100}
                  spy={true}
                  smooth={true}
                  to={'home'}>HOME</Link>
            <Link activeClass={s.active}
                  duration={500}
                  offset={-100}
                  spy={true}
                  smooth={true}
                  to={'skills'}>SKILLS</Link>
            <Link activeClass={s.active}
                  offset={-100}
                  duration={500}
                  spy={true}
                  smooth={true}
                  to={'projects'}>PROJECTS</Link>
            <Link activeClass={s.active}
                  offset={-55}
                  duration={500}
                  spy={true}
                  smooth={true}
                  to={'contact'}>CONTACT</Link>
        </div>
    );
};

export default Nav;