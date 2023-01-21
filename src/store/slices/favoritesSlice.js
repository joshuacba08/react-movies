import { createSlice } from "@reduxjs/toolkit";
import { movieExist } from "../../helpers/favoritesHelper";





export const favoritesSlice = createSlice({
    name: 'favoritesSlice',
    initialState:{
       favorites:[],
    }, 
       reducers: {
      addFavorites:(state,action) => {
        const exist = movieExist(state.favorites, action.payload.id);
        if(exist){
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
