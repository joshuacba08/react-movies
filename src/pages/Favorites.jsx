import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from '../store/slices/favoritesSlice';
import FavoriteCard from '../components/FavoriteCard';


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector( state => state.favorites.favorites );

    const handleClickDelete = (id)=>{
      dispatch( removeFavorites(id) )
    }

  return (
    <main className='py-10 px-4'>
        <ul className='text-white flex justify-center items-center flex-wrap gap-5'>
            { favorites.map( movie => <FavoriteCard key={movie.id} movie={movie} onDelete={handleClickDelete} />) }
        </ul>
    </main>
  )
}

export default Favorites