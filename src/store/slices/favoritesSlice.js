import { createSlice } from "@reduxjs/toolkit";
import { movieExist } from "../../helpers/favoritesHelper";

export const favoritesSlice = createSlice({
  name: "favoritesSlice",

  // defino mis estados iniciales
  initialState: {
    favorites: [], // estado de tipo array que guardara los favoritos
  },
  // acciones o metodos que se ejecutaran para manipular el estado "favorites"
  reducers: {
    addFavorites: (state, action) => { // metodo para agregar favoritos
      // en action.payload vendra el objeto pelicula que quiero agregar a favoritos
      if (movieExist(state.favorites, action.payload.id)) {
        // si ya existe la pelicula, voy a interpretar que lo que realmente quiere el usuario es sacar la pelicula de favoritos (es por que el boton para agregar a favoritos es el mismo para retirar la pelicula de favorito)
        
        // declaro un array nuevo de favoritos y ejecuto el metodo filter en el state de favorites para filtrar todas las peliculas menos la pelicula que se clickeo. En pocas palabras la estoy eliminando
        const newFavorites = state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        );
        state.favorites = newFavorites; // sobre escribo el state favorites con el nuevo array que ya no tiene la pelicula a eliminar
      } else {
        // si no exista la peli, entonces la ingreso por medio de push 
        state.favorites.push(action.payload);
      }
    },
    removeFavorites: (state, { payload }) => {
      const newFavorites = state.favorites.filter(
        (movie) => movie.id !== payload
      );
      state.favorites = newFavorites;
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
