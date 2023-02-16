import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import MovieList from "../components/MovieList";
import CardResult from "../components/CardResult";
const Home = () => {
  const URL = "https://run.mocky.io/v3/c38dfed6-bc92-4cc1-9bcb-ed52bd12c7a2";
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const getMovieByTitle = async (param) => {
    try {
      const response = await fetch(`${URL}`);
      const data = await response.json();
      console.log(data);
      const result =
        param.trim().length >= 2
          ? data.filter((movie) =>
              movie.title.toLowerCase().includes(param.toLowerCase().trim())
            )
          : [];
      setMovies(result);
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
      <div className="flex flex-wrap gap-8 px-4 py-6">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => {
            return <CardResult key={movie.id} movie={movie} />;
          })}
      </div>
      {movies && movies.length === 0 && query.trim().length >= 2 && (
        <h5 className="text-slate-100 font-medium text-xl">
          No se encontraron coincidencias{" "}
        </h5>
      )}

      <MovieList title="Listado de Peliculas" />
    </div>
  );
};

export default Home;
