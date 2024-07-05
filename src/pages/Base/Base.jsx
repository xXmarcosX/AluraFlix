import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Base = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Base
