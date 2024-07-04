import React from 'react'
import style from './TituloSecao.module.css'

const TituloSecao = ({children, cor}) => {
  return (
    <>
      <h1 style={{backgroundColor: `${cor}`}} className={style.title}>
        {children}
      </h1>
    </>
  )
}

export default TituloSecao
