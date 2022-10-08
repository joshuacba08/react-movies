import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

const AuthRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />

            {/* Con esta ruta * estoy redireccionando a loginpage por cualquier otra ruta que no exista */}
            <Route path="*" element={<LoginPage />} />
        </Routes>
    </>
  )
}

export default AuthRouter