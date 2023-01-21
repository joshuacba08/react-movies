import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../store/slices/favoritesSlice";
import {
  MdBookmarkBorder,
  MdBookmark,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { movieExist } from "../helpers/favoritesHelper";

const MovieDetailContainer = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const [arrowDeg, setArrowDeg] = useState(false);

  const handleFavorites = () => {
    console.log("handlefavorites");
    dispatch(addFavorites(movie));
  };
  const handleArrow = () => {
    console.log("clic en arrow");
    setArrowDeg(!arrowDeg);
  };

  return (
    <section className="flex flex-col items-center pt-10">
      <article className="relative">
        <div className="h-96 w-80 bg-slate-50 rounded-[2.4rem] overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={movie.image}
            alt=""
          />
          <div className="w-full h-full absolute top-0 left-0 z-10 bullet-point rounded-[2.4rem]"></div>
          <div
            onClick={handleFavorites}
            className="flex justify-center items-center absolute top-5 right-5 w-10 h-10 rounded-full text-white text-3xl bg-[#00000025] cursor-pointer z-20"
          >
            {movieExist(favorites, movie.id) ? (
              <MdBookmark />
            ) : (
              <MdBookmarkBorder />
            )}
          </div>
        </div>

        <div
          className={`w-80 bg-slate-50 rounded-[2.4rem] py-8 px-6  relative z-20 transition-all overflow-hidden ${
            arrowDeg ? "h-auto top-[-200px]" : "h-96 top-[-50px]"
          }`}
        >
          <div
            className="flex justify-center items-center absolute top-0 right-[45%] w-8 h-8 rounded-full text-white text-3xl bg-black cursor-pointer z-20"
            onClick={handleArrow}
          >
            <MdKeyboardArrowUp
              className={`transition-all ${arrowDeg ? "rotate-180" : ""}`}
            />
          </div>

          <h3 className="text-2xl font-extrabold">{movie.title}</h3>
          <h4 className="text-gray-400 font-medium text-base">
            {movie.original_title}
          </h4>
          <h4 className="text-gray-400 font-medium text-sm">
            Runtime {movie.running_time} min
          </h4>
          <p className="text-gray-600 mt-6 line-clamp-[10]">
            {movie.description}
          </p>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handleFavorites}
              className="bg-black text-sm font-semibold uppercase text-white px-5 py-3 rounded-3xl cursor-pointer"
            >
              {movieExist(favorites, movie.id)
                ? "remove favorites"
                : "add favorites"}
            </button>
            <div className="flex justify-center items-center rounded-full text-white font-semibold bg-green-600 w-10 h-10">
              {movie.rt_score}
            </div>
          </div>
        </div>
      </article>

      <Link to="/home">see more movies</Link>
    </section>
  );
};

export default MovieDetailContainer;
