import React from 'react'
import cl from './MyImageGrid.module.css'
import imgCard1 from '../../img/Group 34929.png'
import imgCard2 from '../../img/Group 34930.png'
import imgCard3 from '../../img/Group 34931.png'

export const MyImageGrid = () => {
    return (
        <div className={cl.main__container}>
            <h1>Наши проекты</h1>
            <div className={cl.container__cards}>
                <div className={cl.card}><a href=""><img src={imgCard1} alt="проект" /></a></div>
                <div className={cl.card}><a href=""><img src={imgCard2} alt="проект" /></a></div>
                <div className={cl.card}><a href=""><img src={imgCard3} alt="проект" /></a></div>
                <div className={cl.card}><a href=""><img src={imgCard1} alt="проект" /></a></div>
            </div>
        </div>
    )
}
