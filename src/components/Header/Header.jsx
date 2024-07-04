import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
import HeaderLink from './HeaderLink/HeaderLink'
import Logo from './image/image 1 (2).svg'

const Header = () => {
  return (
    <>
      <header>
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
        <div className={style.headerBtns}>
          <HeaderLink rota={'/'}>
            HOME
          </HeaderLink>
          <HeaderLink rota={'/gimmickpuppet'}>
            NOVO VÍDEO
          </HeaderLink>
        </div>
      </header>
    </>
  )
}

export default Header
