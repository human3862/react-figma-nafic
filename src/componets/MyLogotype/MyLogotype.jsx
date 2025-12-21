import React from 'react'
import cl from './MyLogotype.module.css'
import logoImg from '../../img/Group 1.png'
import BlackLogoImg from '../../img/Group black.png'

export const MyLogotype = ({isColor}) => {
  const logo = isColor ? logoImg : BlackLogoImg;
  return (
    <img 
      src={logo}
      className={cl.myLogo}
      alt="Лого компании"
      />
  )
}
