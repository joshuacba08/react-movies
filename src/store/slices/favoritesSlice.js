import { createSlice } from "@reduxjs/toolkit";
import { movieExist } from "../../helpers/favoritesHelper";

export const favoritesSlice = createSlice({
    name: 'favoritesSlice',
    initialState:{
       favorites:[],
    }, 
       reducers: {
      addFavorites:(state,action) => {
        if(movieExist(state.favorites, action.payload.id)){
            const newFavorites = state.favorites.filter(movie => movie.id !== action.payload.id);
            state.favorites = newFavorites
        } else {
            state.favorites.push(action.payload)
        }
      }
    }
});

export const {addFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
