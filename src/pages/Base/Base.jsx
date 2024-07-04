import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Base = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
    </main>
  )
}

export default Base
