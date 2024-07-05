import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import TituloSecao from '../../components/TituloSecao/TituloSecao'
import style from './Home.module.css'

const Home = () => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <>
    <Banner/>
    <main className={style.main}>
      <div className={style.container}>
        <TituloSecao cor={'#6BD1FF'}>
          FRONT END
        </TituloSecao>
        <div className={style.containerVideos}>
          {videos ? (
            videos.map((video) => {
              return <Card key={video.id} video={video}/> 
            })
          ) : <p>Não há vídeos</p>}
        </div>
      </div>
    </main>
    </>
  )
}

export default Home
