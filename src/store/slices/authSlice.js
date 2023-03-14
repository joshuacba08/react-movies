// importación necesaria para crear un slice
import { createSlice } from "@reduxjs/toolkit";

// creamos un nuevo slice a partir de la función createSlice
export const authSlice = createSlice({ // pasamos por parámetro la configuración que tendrá dicho slice
  // defino el nombre del slice
  name: "auth",
  
  // declaro mis estados y defino sus valores iniciales a traves de la propiedad initialState
  initialState: {
    isAuthenticated: false, // estado de valor booleano con valor inicial en false para autenticacion
    user: { // estado representado por un objeto para guardar la información del usuario logueado
      avatar:"",
      email: "",
      fname: "",
      id: "",
      lname: "",
      password: "",
    },
  },
  reducers: { // Los reducer defines métodos que tendrán como fin manipular los estados declarados más arriba
    login: (state, action) => { // state representa a los estados iniciales
      // action.payload recibe la informacion que se ingresa por parametro cuando llamo a este metodo en el componente de login
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {// manipula los estados y los regresa a su forma inicial
      localStorage.removeItem('user');// aprovechamos para limpiar el localstore
      state.isAuthenticated = false;
      state.user = {
        avatar:"",
        email: "",
        fname: "",
        id: "",
        lname: "",
        password: "",
      }
    },
  },
});
// exporto los reducer como metodos o acciones del authSlice
export const { login, logout } = authSlice.actions;

// exporto autSlice como un reducer
export default authSlice.reducer;
