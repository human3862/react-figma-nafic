import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToAnchor = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Ищем элемент по ID (убираем символ #)
            const element = document.getElementById(hash.replace('#', ''));

            if (element) {
                // Небольшая задержка, чтобы React успел отрисовать страницу
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [hash]); // Срабатывает при каждом изменении хэша

    return null;
};


