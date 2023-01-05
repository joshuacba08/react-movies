import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FooterApp from '../layout/FooterApp'
import NavbarApp from '../layout/NavbarApp'
import Home from '../pages/Home'
import Detailpage from '../pages/Detailpage'

const MoviesRouter = () => {
  return (
    <div className='bg-slate-900 min-h-screen'>
        <NavbarApp />

        <Routes>
            <Route path="/home" element={ <Home /> }/>
            <Route path="/search" />
            <Route path="/movies" />
            <Route path="/detail/:id" element={ <Detailpage /> }/>
        </Routes>

        <FooterApp />

    </div>
  )
}

export default MoviesRouter