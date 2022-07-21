import React from 'react';
import s from './Project.module.css'


type ProjectType={
    title: string
    description:string
}

const Project = (props: ProjectType) => {
    return (
        <div className={s.project}>

            <div className={s.imgLinkContainer}>
                <a href={'https://aisylu24.github.io/my-portfolio/'} className={s.projectLink}>See more</a>
            </div>

            <h3 className={s.projectTitle}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
        </div>
    );
};

export default Project;