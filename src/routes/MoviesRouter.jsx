import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FooterApp from '../layout/FooterApp'
import NavbarApp from '../layout/NavbarApp'

const MoviesRouter = () => {
  return (
    <>
        <NavbarApp />

        <Routes>
            <Route path="/home" />
            <Route path="/search" />
            <Route path="/movies" />
            <Route path="/detail/:id" />
        </Routes>

        <FooterApp />

    </>
  )
}

export default MoviesRouter