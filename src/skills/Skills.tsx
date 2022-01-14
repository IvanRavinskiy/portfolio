import React from 'react';
import style from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {v1} from "uuid";
import {Title} from "../common/components/Title/Title";


export const Skills = () => {

    const skills = [
        {id: v1(), title: 'React', description: 'kjnkjf vk fkv fkvk vkdfvkd fkdf kv dk vdkf vkdfkv dkf vkdf'},
        {id: v1(), title: 'Redux', description: 'kdc sd c ds cd sd dksfdfds mfdsmf dcfj dvd'},
        {id: v1(), title: 'HTML & CSS', description: 'kjerkf nerkjf  krefkrefker krenfv dk vdkf vkdfkv dkf vkdf'},
        {id: v1(), title: 'JS', description: 'kjefkdvkd fvkdfvkdfn dfovdfnv fdvidfnv dfnvindf vdfn vkd fvkew dksd l dfvkrefker krenfv dk vdkf vkdfkv dkf vkdf'},
    ]


    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.containerSkills}`}>
                    <Title title={'My skills'} />

                <div className={style.skills}>
                    {skills.map(s=> {
                        return(
                            <Skill key={s.id} title={s.title} description={s.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
