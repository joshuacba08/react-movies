import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import favoritesSlice from "./slices/favoritesSlice";

export default configureStore({
    reducer:{
        auth: authSlice,
        favorites: favoritesSlice,
    }
})

