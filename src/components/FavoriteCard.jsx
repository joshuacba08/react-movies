import React from "react";
import { MdDelete } from "react-icons/md";

const FavoriteCard = ({ movie, onDelete }) => {
  return (
    <section className="h-[240px] w-[340px] rounded-[20px] overflow-hidden relative shadow-lg">
      <img
        className="w-full h-full object-cover brightness-75"
        src={movie.image}
      />
      <h3 className="text-[30px] font-bold text-white absolute top-[185px] left-6">
        {movie.title}
      </h3>
      <div className="absolute top-4 right-4 text-white text-2xl cursor-pointer duration-200 ease-in-out hover:scale-110"
        onClick={()=>{ onDelete(movie.id) }}
      >
        <MdDelete />
      </div>
    </section>
  );
};

export default FavoriteCard;
