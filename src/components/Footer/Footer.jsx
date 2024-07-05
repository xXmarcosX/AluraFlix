import React from 'react'
import style from './Footer.module.css'
import Logo from './img/LogoMain.svg'

const Footer = () => {
  return (
    <>
      <header className={style.footer}>
        <img src={Logo} alt="" />
      </header>
    </>
  )
}

export default Footer
