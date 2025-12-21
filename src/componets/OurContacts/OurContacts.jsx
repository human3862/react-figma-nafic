import React from 'react'
import cl from './OurContacts.module.css'
import vector from '../../img/Vector.png'
import map from '../../img/iPhone 13.png'

export const OurContacts = () => {
    return (
        <div id='contacts__block' className={cl.main__container}>
            <div className={cl.main__container__title}>
                <img src={vector} alt="" />
                <h2>Контакты</h2>

                <p>Мы всегда рады ответить на все ваши вопросы,
                    для получения более подробной информации, просто
                    свяжитесь с нами по ниже указанным данным.</p>
            </div>

            <div className={cl.main__section}>
                <div className={cl.section__text}>
                    <div className={cl.item}>
                        <h3>ТЕЛЕФОН</h3>
                        <p>+998 99 663 7000</p>
                    </div>
                    <div className={cl.item}>
                        <h3>АДРЕС</h3>
                        <p>Лайлитугон, 1/6  Ташкент, Чорсу ж/м</p>
                    </div>
                    <div className={cl.item}>
                        <h3>EMAIL</h3>
                        <p>nafisinterlux@gmail.com</p>
                    </div>
                    <div className={cl.item}>
                        <h3>SOCIAL MEDIA</h3>
                        <p>@nafis_interlux</p>
                    </div>
                </div>
                <a href="https://2gis.uz/tashkent?m=69.279887%2C41.311204%2F18">
                    <img src={map} alt="" />
                    </a>
            </div>
        </div>
    )
}
