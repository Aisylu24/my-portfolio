import React from 'react';
import {Contacts} from "../../contacts/Contacts";
import Skills from "../../skills/Skills";
import Projects from "../../projects/Projects";
import Main from "../../main/Main";
import {Routes, Route, Navigate} from 'react-router-dom'

export const PATH = {
    HOME: '/home',
    SKILLS: '/skills',
    PROJECTS: '/projects',
    CONTACT: '/contact',
}

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} element={<Main/>}/>
                <Route path={PATH.SKILLS} element={<Skills/>}/>
                <Route path={PATH.PROJECTS} element={<Projects/>}/>
                <Route path={PATH.CONTACT} element={<Contacts/>}/>
            </Routes>
        </div>
    );
};

export default Pages;