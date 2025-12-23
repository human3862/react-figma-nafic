import React from 'react'
import cl from './Footer.module.css'
import frame from '../../img/Frame.png'
import frame2 from '../../img/Frame2.png'
import frame3 from '../../img/Frame3.png'
import footer__logo from '../../img/footer-logo.png'

export const Footer = () => {
    return (
        <footer >
            <div className={cl.footer__container}>
                <div className={cl.footer__nav}>
                    <div className={cl.footer__column}>
                        <img src={footer__logo} alt="" />
                    </div>


                    <div className={cl.footer__column}>
                        <h3>Главная</h3>
                        <ul>
                                <li>Почему мы?</li>
                                <li>Цифры</li>
                                <li>Наши проекты</li>
                                <li>Наша команда</li>
                                <li>Контакты</li>
                        </ul>
                    </div>
                    <div className={cl.footer__column}>
                        <h3>Наши проекты</h3>
                        <ul>
                                <li>ЖК Boulevard</li>
                                <li>ЗД "Oq Tosh"</li>
                                <li>ЖК Zenith</li>
                                <li>ЖК Darkhan</li>
                        </ul>
                    </div>
                    <div className={cl.footer__column}>
                        <h3>Служба поддержки</h3>
                        <ul>
                                <li>Аккаунт</li>
                                <li>Помощь</li>
                                <li>Связаться с нами</li>
                        </ul>
                    </div>
                    <div className={cl.footer__column}>
                        <h3>Контакты</h3>
                        <ul>
                                <li> <img src={frame} alt="контакты" /> +998 99 663 70 00</li>
                                <li> <img src={frame2} alt="почта" />nafisinterlux@gmail.com</li>
                                <li> <img src={frame3} alt="местоположение" />
                                    Ташкент, Лайлитугон 1/6,
                                        Чорсу ж/м
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>Copyright 2022 ©nafisinterlux</p>
        </footer>
    )
}
