import React from "react"
import s from "./Contacts.module.css"
import commonStyle from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${commonStyle.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input placeholder={'your name'}/>
                    <input placeholder={'your phone number'}/>
                    <textarea placeholder={'what project do you want to do?'}/>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    )
}