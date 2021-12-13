import React from 'react';
import style from './Contact.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={` ${stylesContainer.container} ${style.containerContact}`}>
                <h2 className={stylesContainer.titleContainer}>Contact Me</h2>
                <div className={style.contactForm}>
                    <form className={style.contactFormArea}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

