import React from 'react';
import s from './Hire.module.css'
import commonStyle from "../common/styles/Container.module.css";

const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${commonStyle.container} ${s.hire}`}>
            <h2 className={s.hireTitle}>Рассматриваю вариант удаленной работы</h2>
            <button className={s.hireMeButton} onClick={()=>{alert('Нанять меня')}}>Hire me</button>
            </div>
        </div>
    );
};

export default Hire;