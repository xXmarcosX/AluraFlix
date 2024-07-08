import React from 'react'
import { Link } from 'react-router-dom'
import style from './FooterLink.module.css'

const FooterLink = ({rota, children}) => {
  return (
    <>
      <Link to={rota} className={style.link}>
        {children}
      </Link>
    </>
  )
}

export default FooterLink
