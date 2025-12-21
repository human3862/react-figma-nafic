import React from 'react'
import { MyNav } from '../MyNav/MyNav'
import cl from './HomeBg.module.css'
import { ApplicationForm } from '../ApplicationForm/ApplicationForm'

export const HomeBg = () => {
    return (
        <div className={cl.header}>   
            <MyNav color={true} />
            <div className={cl.main__container}>
                    <h1>Функция,<br /> Комфорт,<br /> Элегантность.</h1>
                <div className={cl.container__form}>   
                    <ApplicationForm />
                </div>
            </div>
        </div>
    )
}
