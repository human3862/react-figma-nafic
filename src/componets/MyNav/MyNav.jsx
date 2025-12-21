import React, { useRef, useState } from 'react'
import cl from './MyNav.module.css'
import { NavLink } from 'react-router-dom';
import { MyLogotype } from '../MyLogotype/MyLogotype'

export const MyNav = ({ bgClass, color }) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false);


  const navbarClasses = `${cl.navbar} ${bgClass ? cl[bgClass] : ''}`


  return (
    <nav className={navbarClasses}>
      <MyLogotype isColor={color}/>

      <div className={cl.burger} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? cl.activeBurger : ''}></span>
        <span className={isOpen ? cl.activeBurger : ''}></span>
        <span className={isOpen ? cl.activeBurger : ''}></span>
      </div>

      <ul className={`${cl.navLinks} ${isOpen ? cl.open : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? cl.active : ''}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? cl.active : ''}>
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? cl.active : ''}>
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink to="/#contacts__block" onClick={closeMenu}  className={({ isActive }) => isActive ? cl.active : ''}>
            Контакты
          </NavLink>
        </li>
      </ul>

      <ul className={`${cl.langSwitcher} ${isOpen ? cl.open : ''}`}>
          <li><a href="">Ru</a></li>
          <li><a href="">En</a></li>
      </ul>
    </nav>
  )
}
