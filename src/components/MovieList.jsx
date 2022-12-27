import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title}) => {
  const [movies, setMovies] = useState([]);

  const URL = "https://run.mocky.io/v3/c38dfed6-bc92-4cc1-9bcb-ed52bd12c7a2";

  const getMovies = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="my-10">
        <h2 className="text-white text-2xl font-normal mb-7">{title}</h2>
        <div className="flex justify-center flex-wrap gap-8">
        {
            movies.length > 0 ?
             movies.map( movie => <MovieCard key={movie.id} movie={movie}/>)  
             : <p className="text-white">Cargando datos...</p> 
        }
        </div>
        
    </section>
  );
};

export default MovieList;
