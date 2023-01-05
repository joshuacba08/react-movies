import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { image, release_date, title } = movie;

  return (
    <article className="w-40 h-48">
      <div className="w-full h-28 rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>

      <div className="text-slate-400 flex gap-3 mt-2">
        <span>{release_date}</span> <span>Movie</span> <span>PG</span>
      </div>
      <Link to={`/detail/${movie.id}`}>
        <h3 className="text-white text-2xl font-semibold line-clamp-2">
          {title}
        </h3>
      </Link>
    </article>
  );
};

export default MovieCard;
