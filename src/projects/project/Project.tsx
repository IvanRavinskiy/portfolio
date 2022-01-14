import React from 'react';
import style from './Project.module.css'

type PropsType = {
    title: string
    img: string
    git: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <img src={props.img} className={style.img}/>
            <div className={style.projectTitle}>
                {props.title}
            </div>
        </div>
    );
};