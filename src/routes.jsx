import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './pages/Base/Base'
import Home from './pages/Home/Home'
import NovoVideo from './pages/NovoVideo/NovoVideo'

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base/>}>
            <Route index element={<Home/>}/>
            <Route path='novoVideo' element={<NovoVideo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
