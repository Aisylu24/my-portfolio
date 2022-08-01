import React from 'react';
import s from './Skills.module.css'
import commonStyle from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${commonStyle.container} ${s.skillsContainer}`}>
               <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'}/>
                    <Skill title={'CSS'} description={'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'}/>
                    <Skill title={'React'} description={'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;