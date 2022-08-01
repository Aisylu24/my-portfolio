import React from 'react';
import s from './Project.modules.scss'


type ProjectType={
    title: string
    description:string
    style: any
}

const Project = (props: ProjectType) => {
    return (
        <div className={s.project}>

            <div className={s.img} style={props.style}>
                <a href={'https://aisylu24.github.io/my-portfolio/'} className={s.projectLink}>See more</a>
            </div>
<div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
</div>
        </div>
    );
};

export default Project;