import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from '../store/slices/favoritesSlice';
import FavoriteCard from '../components/FavoriteCard';


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector( state => state.favorites.favorites );

  return (
    <main>
        <ul className='text-white'>
            { favorites.map( movie => <FavoriteCard key={movie.id} movie={movie} />) }
        </ul>
    </main>
  )
}

export default Favorites