import React from 'react';
import style from './Contact.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";
import {ContactForm} from "./ContactForm/ContactForm";

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={` ${stylesContainer.container} ${style.containerContact}`}>
                <Title title={'Contact Me'} />
                <ContactForm/>
            </div>
        </div>
    );
};

