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
                                <li><a href="*">Почему мы?</a></li>
                                <li><a href="*">Цифры</a></li>
                                <li><a href="*">Наши проекты</a></li>
                                <li><a href="*">Наша команда</a></li>
                                <li><a href="*">Контакты</a></li>
                        </ul>
                    </div>
                    <div className={cl.footer__column}>
                        <h3>Наши проекты</h3>
                        <ul>
                                <li><a href="">ЖК Boulevard</a></li>
                                <li><a href="">ЗД "Oq Tosh"</a></li>
                                <li><a href="">ЖК Zenith</a></li>
                                <li><a href="">ЖК Darkhan</a></li>
                        </ul>
                    </div>
                    <div className={cl.footer__column}>
                        <h3>Служба поддержки</h3>
                        <ul>
                                <li><a href="">Аккаунт</a></li>
                                <li><a href="">Помощь</a></li>
                                <li><a href="">Связаться с нами</a></li>
                        </ul>
                    </div>
                    <div className={cl.footer__column}>
                        <h3>Контакты</h3>
                        <ul>
                                <li> <img src={frame} alt="контакты" /> <a href="">+998 99 663 70 00</a></li>
                                <li> <img src={frame2} alt="почта" /><a href="mailto:nafisinterlux@gmail.com">nafisinterlux@gmail.com</a></li>
                                <li> <img src={frame3} alt="местоположение" /><a href="">
                                    Ташкент, Лайлитугон 1/6,
                                        Чорсу ж/м
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>Copyright 2022 ©nafisinterlux</p>
        </footer>
    )
}
