import React from 'react'

const PrivateRoute = ({children}) => {

    const login = true;

  return login
         ? children
         : <p>Usuario no autenticado</p>
}

export default PrivateRoute