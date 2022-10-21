import React from 'react';
import s from "./Projects.module.scss"
import Project from "./Project/Project";
import commonStyle from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import counterImg from "../assets/images/counter.png"

const Projects = () => {
let imgUrl;

    const planner = {
        color: 'blue',
        backgroundImage: `url(${imgUrl})`,
    }
    const counter = {
        color: 'blue',
        backgroundImage: `url(${counterImg})`,
    }
    const socialNet = {
        color: 'blue',
        backgroundImage: `url(${imgUrl})`,
    }
    const cards = {
        color: 'blue',
        backgroundImage: `url(${imgUrl})`,
    }
    return (
        <div className={s.projectsBlock}>
            <div className={`${commonStyle.container} ${s.projectsContainer}`}>
              <Title title={'Projects'} />
                <div className={s.projects}>
                    <Project style={planner} title={"Planner"}  projectLink={''} description={'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                    <Project style={counter} title={"Counter"}  projectLink={'https://aisylu24.github.io/counter'} description={'TypeScript / React / Redux'}/>
                    <Project style={socialNet} projectLink={''} title={"Social Network"}
                             description={'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                    <Project style={cards} projectLink={''} title={"Cards"}
                             description={'TypeScript / React / MUI / Redux-Toolkit / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;