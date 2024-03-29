import React from 'react';
import s from "./Title.module.scss"

type TitlePropsType = {
    title: string
}

const Title = (props:TitlePropsType) => {
    return (
        <div className={s.title}>
               <h2>{props.title}</h2>
        </div>
    );
};

export default Title;