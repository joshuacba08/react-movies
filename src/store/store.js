// importaciones necesarias para la creación de nuestro store
import { configureStore } from "@reduxjs/toolkit";

// importaciones de slices ligados al store
import authSlice from "./slices/authSlice";
import favoritesSlice from "./slices/favoritesSlice";

// configure store retorna un objeto store a traves de redux
export default configureStore({ // lo que se le por parámetro es un objeto con una propiedad llamada reducers
    reducer:{
        auth: authSlice, // debo definir el nombre de la propiedad y los slices correspondientes
        favorites: favoritesSlice,
    }
})

