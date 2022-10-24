import React from "react"
import s from "./Contacts.module.scss"
import commonStyle from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock} id={'contact'}>
            <div className={`${commonStyle.container} ${s.contactsContainer}`}>
                <Title title={'Get in touch'}/>
                <form className={s.form}>
                    <input className={s.edit} placeholder={'Your name'}/>
                    <input className={s.edit} placeholder={'Your phone number'}/>
                    <textarea className={s.edit} placeholder={'Your message'}/>
                    <button type={'submit'} onClick={()=>{
                        console.log('hey')}} className={s.button}>Send</button>
                </form>
            </div>
        </div>
    )
}