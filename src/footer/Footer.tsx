import React from 'react';
import style from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${stylesContainer.container} ${style.containerFooter}`}>
                <div>Ivan Ravisnki</div>
                <div className={style.soc}>
                    <a href=''>linkedIn</a>
                    <a href=''>Insta</a>
                    <a href=''>VK</a>
                </div>
                <div>All rights reserved 2021</div>
            </div>

        </div>
    );
};

