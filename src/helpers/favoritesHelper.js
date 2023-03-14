
// movie exist es una funcion que recibe como parametros dos cosas:
// - La coleccion de favoritos
// - El id de la pelicula que quiero agregar a favoritos

export const movieExist = (arrayFavorites, id) =>{
   // el metodo some devuelve un booleano, si ya existe una pelicula con el id de la pelicula que quiero agregar, devolvera un true, de lo contrario devolvera un false
   return arrayFavorites.some(movie => movie.id === id)
}

