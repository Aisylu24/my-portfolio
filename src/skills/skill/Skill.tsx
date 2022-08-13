import React from 'react';
import s from './Skill.module.scss'

type SkillType = {
    title: string
    iconLink: string
}

const Skill = (props: SkillType) => {
    return (
        <div>
            <div className={s.icon}>
                <img src={props.iconLink} title={props.title} alt={props.title}/>
            </div>
            {/*<h3 className={s.title}>{props.title}</h3>*/}
        </div>
    );
};

export default Skill;