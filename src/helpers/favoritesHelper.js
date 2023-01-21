export const movieExist = (arrayFavorites, id) =>{
   return arrayFavorites.some(movie => movie.id === id)
}

