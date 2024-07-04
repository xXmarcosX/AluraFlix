import React from 'react'
import Banner from '../../components/Banner/Banner'
import TituloSecao from '../../components/TituloSecao/TituloSecao'
import style from './Home.module.css'

const Home = () => {
  return (
    <>
    <Banner/>
    <main className={style.main}>
      <div className={style.container}>
        <TituloSecao cor={'#6BD1FF'}>
          FRONT END
        </TituloSecao>
        <div className={style.containerVideos}>
          card
        </div>
      </div>
    </main>
    </>
  )
}

export default Home
