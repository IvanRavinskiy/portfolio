import React from 'react';
import style from './Project.module.css'

type propsType= {
    title:string
    img: string
    git: string
}

export const Project = (props: propsType) => {
    return (
        <div>
            <div className={style.project}>
                <img src={props.img} className={style.img}/>
                {props.title}
            </div>
        </div>

    );
};