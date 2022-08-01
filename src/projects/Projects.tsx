import React from 'react';
import s from "./Projects.module.scss"
import Project from "./Project/Project";
import commonStyle from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";


const Projects = () => {
let imgUrl;

    const planner = {
        color: 'blue',
        backgroundImage: `url(${imgUrl})`,
    }
    const counter = {
        color: 'blue',
        backgroundImage: `url(${imgUrl})`,
    }
    const socialNet = {
        color: 'blue',
        backgroundImage: `url(${imgUrl})`,
    }
    return (
        <div className={s.projectsBlock}>
            <div className={`${commonStyle.container} ${s.projectsContainer}`}>
              <Title title={'Projects'} />
                <div className={s.projects}>
                    <Project style={planner} title={"Planner"} description={'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                    <Project style={counter} title={"Counter"} description={'TypeScript / React / Redux'}/>
                    <Project style={socialNet} title={"Social Network"}
                             description={'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;