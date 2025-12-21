import React from 'react'
import cl from './Projects.module.css'
import {MyNav} from '../MyNav/MyNav'

export const ProjectsBg = () => {
  return (
    <header className={cl.header}>
        <MyNav bgClass="BlurBg" color={true}/>
        <div className={cl.header__title}>
        <h1>Создавайте <br />
          cвои мечты
          вместе с нами!</h1>
        </div>
    </header>
  )
}
