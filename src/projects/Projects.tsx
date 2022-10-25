import React from 'react';
import s from "./Projects.module.scss"
import Project from "./Project/Project";
import commonStyle from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import counterImg from "../assets/images/counter.png"
import cardsImg from "../assets/images/cards.png"
import plannerImg from "../assets/images/planner.png"
import networkImg from "../assets/images/network.png"

const Projects = () => {

    const planner = {
        color: 'blue',
        backgroundImage: `url(${plannerImg})`,
    }
    const counter = {
        color: 'blue',
        backgroundImage: `url(${counterImg})`,
    }
    const socialNet = {
        color: 'blue',
        backgroundImage: `url(${networkImg})`,
    }
    const cards = {
        color: 'blue',
        backgroundImage: `url(${cardsImg})`,
    }
    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${commonStyle.container} ${s.projectsContainer}`}>
              <Title title={'Projects'} />
                <div className={s.projects}>
                    <Project style={planner} title={"Planner"}  projectLink={'https://aisylu24.github.io/todolist-project/'} description={'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                    <Project style={counter} title={"Counter"}  projectLink={'https://aisylu24.github.io/counter'} description={'TypeScript / React / Redux'}/>
                    <Project style={socialNet} projectLink={'https://aisylu24.github.io/social-network/'} title={"Social Network"}
                             description={'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                    <Project style={cards} projectLink={'https://anyagalkina.github.io/cards/'} title={"Cards"}
                             description={'TypeScript / React / MUI / Redux-Toolkit / Redux-Thunk / Axios / React-router-dom / Unit tests'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;