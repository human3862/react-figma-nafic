import React from 'react'
import cl from './WhyUsCards.module.css'
import vector from '../../img/Vector.png'
import icon from '../../img/icon.png'
import icon1 from '../../img/icon (1).png'
import icon2 from '../../img/icon (2).png'
import icon3 from '../../img/icon (3).png'
import photo from '../../img/LIVING02REN 1.png'

export const WhyUsCards = () => {
    return (
        <div className={cl.main__container}>
            <div className={cl.main__container__title}>
                <img src={vector} alt="" />
                <h2>Почему мы?</h2>
            </div>
            <div className={cl.container__cards}>
                <div className={cl.container__card}>
                    <img src={icon} alt="" />
                    <h3>Квалифицированные
                        специалисты</h3>
                    <p>Принято считать, что
                        специалисты стоят дорого,
                        но если посчитать все издержки,
                        возникшие от горе-мастеров,
                        то в итоге выходит дешевле</p>
                </div>
                <div className={cl.container__card}>
                    <img src={icon1} alt="" />
                    <h3>Точный
                        расчет сметы</h3>
                    <p>Профессиональный и точный
                        расчет сметы работ позволит
                        сократить общую сумму
                        расходов на ремонт, в
                        некоторых случаях на 40-60%</p>
                </div>
                <div className={cl.container__card}>
                    <img src={icon2} alt="" />
                    <h3>Составляем план
                        этапов работы</h3>
                    <p>Это поставляет сократить
                        количество времени, которое
                        заказчик тратит на
                        согласование. Мы снимаем
                        эту головную боль</p>
                </div>
                <div className={cl.container__card}>
                    <img src={icon3} alt="" />
                    <h3>Договор и гарантии </h3>
                    <p>Договор дисциплинирует и
                        дает гарантин обеим
                        сторонам мы несем полную
                        отвественность и даем
                        гарантии качественного
                        исполнения в срок </p>
                </div>
            </div>

            <div className={cl.container__content}>
                <img src={photo} alt="" />
                <div className={cl.content__text}>
                    <h3>Установливаем <br />
                        высокие стандарты</h3>
                    <div className={cl.content__items}>
                        <div className={cl.content__item}>
                            <h4>15</h4>
                            <p>Лет опытa в отрасли строительства</p>
                        </div>
                        <div className={cl.content__item}>
                            <h4>2</h4>
                            <p>Года гарантия на ремонтные услуги</p>
                        </div>
                        <div className={cl.content__item}>
                            <h4>20</h4>
                            <p>Опытных экспертов</p>
                        </div>
                        <div className={cl.content__item}>
                            <h4>10</h4>
                            <p>Завершенных проектов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
