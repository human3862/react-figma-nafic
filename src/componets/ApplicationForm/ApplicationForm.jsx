import React, { useState } from 'react'
import cl from './ApplicationForm.module.css'

export const ApplicationForm = () => {

    const initialFormState = {
        name: '',
        phone: '',
        comment: '',
        service: '',
    };

    const [formData, setFormData] = useState(initialFormState);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({ ...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault(); console.error("ТЕСТ: Консоль работает!");        
        console.log('Данные для отправки: ', formData);
        setFormData(initialFormState);
    }


  return (
    <div>
          <form className={cl.application__form} onSubmit={handleSubmit}>
              <h3>Подать заявку</h3>

              <input
                  type="text"
                  name='name'
                  placeholder='Введите ваше имя'
                  value={formData.name}
                  onChange={handleChange}
                  className={formData.service ? cl.filled : ''}
              />
              <input
                  type='tel'
                  name='phone'
                  placeholder='Ваш номер телефона'
                  value={formData.phone}
                  onChange={handleChange}
                  className={formData.service ? cl.filled : ''}
              />

              <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={formData.service ? cl.filled: ''}
              >
                  <option value="">Выберите услугу</option>
                  <option value="1">Консультация</option>
                  <option value="2">Ремонт под ключ</option>
                  <option value="3">Проектирование</option>
                  <option value="4">Дизайнерские услуги</option>
              </select>
              <textarea
                  name="comment"
                  placeholder='Комментарий'
                  value={formData.comment}
                  onChange={handleChange}
                  className={formData.service ? cl.filled : ''}
              ></textarea>

              <button type='submit'>Отправить</button>
          </form>
      </div>
  )
}
