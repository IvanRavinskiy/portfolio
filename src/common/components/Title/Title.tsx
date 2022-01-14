import React from 'react';
import style from './Title.module.css'


type PropsType = {
    title: string,
}

export const Title = (props: PropsType) => {
    return (
        <div>
            <h2 className={style.titleContainer}>
                {props.title + ''}
            </h2>

        </div>
    );
};

