import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './HeaderLink.module.css'

const HeaderLink = ({children, rota}) => {
  return (
    <>
      <NavLink className={({isActive}) => 
        `${style.link} ${isActive ? style.destacado: ''}`
      } to={rota}>
        {children}
      </NavLink>
    </>
  )
}

export default HeaderLink
