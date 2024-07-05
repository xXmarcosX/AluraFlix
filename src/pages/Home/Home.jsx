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

  const videosFront = videos.filter(video => video.categoria === 'FRONT END')
  const videosBack = videos.filter(video => video.categoria === 'BACK END')
  const videosMobile = videos.filter(video => video.categoria === 'MOBILE')

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
            videosFront.map((video) => {
              return <Card key={video.id} video={video} cor={'#6BD1FF'}/> 
            })
          ) : <p>Não há vídeos</p>}
        </div>
      </div>

      <div className={style.container}>
        <TituloSecao cor={'#00C86F'}>
          BACK END
        </TituloSecao>
        <div className={style.containerVideos}>
          {videos ? (
            videosBack.map((video) => {
              return <Card key={video.id} video={video} cor={'#00C86F'}/> 
            })
          ) : <p>Não há vídeos</p>}
        </div>
      </div>

      <div className={style.container}>
        <TituloSecao cor={'#FFBA05'}>
          MOBILE
        </TituloSecao>
        <div className={style.containerVideos}>
          {videos ? (
            videosMobile.map((video) => {
              return <Card key={video.id} video={video} cor={'#FFBA05'}/> 
            })
          ) : <p>Não há vídeos</p>}
        </div>
      </div>
    
    </main>
    </>
  )
}

export default Home
