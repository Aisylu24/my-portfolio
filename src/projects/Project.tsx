import React from 'react';
import s from './Projects.module.css'


type ProjectType={
    title: string
    description:string
}

const Project = (props: ProjectType) => {
    return (
        <div>
            <div className={s.photo}></div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
        </div>
    );
};

export default Project;