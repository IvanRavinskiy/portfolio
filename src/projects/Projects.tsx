import React from 'react';
import style from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {v1} from "uuid";
import imgSN from './imgFile/social.webp'
import imgTL from './imgFile/todolist.png'
import {Title} from "../common/components/Title/Title";

export const Projects = () => {

    const projects = [
        {id: v1(), title:'Social Network', img: imgSN, git: 'View code'},
        {id: v1(), title:'Todolist', img: imgTL, git: 'View code'},
    ]


    return (
        <div className={style.projectsBlock}>
            <div className={`${stylesContainer.container} ${style.containerProjects}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    {projects.map(p=> {
                        return(
                            <Project key={p.id} title={p.title} img={p.img} git={p.git}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};