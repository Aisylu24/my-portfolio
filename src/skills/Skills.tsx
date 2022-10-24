import React from 'react';
import s from './Skills.module.scss'
import commonStyle from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {

    const skillsLinks = {
        react:"https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
        redux: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        mui: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
        css: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        html: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        js: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        ts: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        sass: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    }

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${commonStyle.container} ${s.skillsContainer}`}>
                <div className={s.skills}>
                    <Skill title={'React'} iconLink={skillsLinks.react}/>
                    <Skill title={'Redux'} iconLink={skillsLinks.redux} />
                    <Skill title={'MUI'} iconLink={skillsLinks.mui}/>
                    <Skill title={'CSS3'} iconLink={skillsLinks.css}/>
                    <Skill title={'HTML5'} iconLink={skillsLinks.html}/>
                    <Skill title={'JS'} iconLink={skillsLinks.js}/>
                    <Skill title={'TS'} iconLink={skillsLinks.ts}/>
                    <Skill title={'Sass'} iconLink={skillsLinks.sass}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;