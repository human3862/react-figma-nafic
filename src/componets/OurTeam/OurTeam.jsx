import React from 'react'
import cl from './OurTeam.module.css'
import photo from '../../img/Group 10861.png'
import photo1 from '../../img/Group 10862.png'
import photo2 from '../../img/Group 10863.png'
import photo3 from '../../img/Group 10864.png'
import vector from '../../img/Vector.png'

export const OurTeam = () => {
  return (
    <div className={cl.main__container}>
          <div className={cl.main__container__title}>
              <img src={vector} alt="" />
              <h2>Наша Команда</h2>
          </div>

          <div className={cl.container__items}>
              <img src={photo} alt="" />
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo} alt="" />
          </div>
    </div>
  )
}
