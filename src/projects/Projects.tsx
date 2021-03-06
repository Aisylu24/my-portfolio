import React from 'react';
import s from "./Projects.module.css"
import Project from "./Project/Project";
import commonStyle from "../common/styles/Container.module.css";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${commonStyle.container} ${s.projectsContainer}`}>
                <h2 className={s.projectsTitle}>My projects</h2>
                <div className={s.projects}>
                    <Project title={"Title"} description={'React JS allows complete flexibility to the developer. '}/>
                    <Project title={"Title"}
                             description={'You can use it for creating SPAs, mobile or hybrid apps, even a TV application. '}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;