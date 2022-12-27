import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import MovieList from "../components/MovieList";
import CardResult from "../components/CardResult";
const Home = () => {
  const urlBase = "http://www.omdbapi.com";
  const api_key = "236569b8";
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const getMovieByTitle = async (param) => {
    try {
      const response = await fetch(`${urlBase}/?t=${param}&apikey=${api_key}`);
      const data = await response.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getMovieByTitle(query);
  };

  return (
    <div className="mt-4 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 text-white text-2xl"
      >
        <button type="submit">
          <FiSearch />
        </button>

        <input
          type="text"
          className="w-full text-xl bg-transparent outline-none"
          placeholder="Search for movies or TV series"
          value={query}
          onChange={handleInput}
        />
      </form>
      {movie && movie.Response === "True" && (
        <div className="my-5">
          <CardResult movie={movie} />
        </div>
      )}
      {movie && movie.Response === "False" && (
        <h5 className="text-slate-100 font-medium text-xl">No se encontraron coincidencias </h5>
      )}

      <MovieList title="Listado de Peliculas"/>
    </div>
  );
};

export default Home;
