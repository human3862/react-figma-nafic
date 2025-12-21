import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import rect from '../../img/Rectangle 344 (1).png';
import rect1 from '../../img/Rectangle 344 (2).png';
import rect2 from '../../img/Rectangle 344 (3).png';
import rect3 from '../../img/Rectangle 344.png';
import cl from './AboutUss.module.css';

const cardsData = [
  {
    id: 1,
    name: "Садриддин Пошшахожаев",
    title: "Дизайн и архитектура",
    description: "Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными.",
    image: rect
  },
  {
    id: 2,
    name: "Бобур Жафаров ",
    title: "Исполнительный директор",
    description: "Проектирует уникальные Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными. и загородные дома.",
    image: rect1
  },
  {
    id: 3,
    name: "Шахзод Рузиев",
    title: "Помощник экономиста",
    description: "Образование: Среднее: Радио-технический колледж (РЭВиМ)Незаконченное: высшее Amity(B.Tech)Помощник Экономиста, Распределение растрат фирмы ",
    image: rect2
  },
  {
    id: 4,
    name: "БаходирУбайдуллаев",
    title: "Исполнительный директор",
    description: "Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными",
    image: rect3
  }
];

const AnimatedCard = ({ card }) => (
  <motion.div
    key={card.id}
    className={cl.card}
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <img src={card.image} alt={card.name} />
    <div className={cl.card__text}>
      <h3>{card.name}</h3>
      <h4><strong>{card.title}</strong></h4>
      <p>{card.description}</p>
    </div>
  </motion.div>
);


export const AboutUss = () => {
  const [activeCardId, setActiveCardId] = useState(cardsData[0].id);
  const activeCard = cardsData.find(card => card.id === activeCardId);

  const goToNextCard = () => {
    setActiveCardId((prevId) => {
      const currentIndex = cardsData.findIndex(card => card.id === prevId);
      const nextIndex = (currentIndex + 1) % cardsData.length;
      return cardsData[nextIndex].id;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextCard();
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={cl.main__container}>
      <div className={cl.main__container__title}>
        <h2>О нас</h2>
        <p>Современная студия интерьерного и экстерьерного дизайна занимается созданием интерьеров и ремонтом под ключ, опираясь на функциональность и индивидуальность каждого клиента. Наша цель - сохранить ваше время и осуществить вашу мечту об уютном доме в реальность. ”NAFIS Inter Lux” - поможет создать интерьер без излишеств, наполненный элегантностью, в котором комфортно жить и работать.</p>
      </div>

      <div className={cl.cards__changer}>
        <AnimatePresence mode="wait">
          {activeCard && <AnimatedCard card={activeCard} />}
        </AnimatePresence>
      </div>

      <button onClick={goToNextCard} className={cl.main__button}>
        Следующий
      </button>
    </div>
  );
};
