import React from 'react'

const CardResult = ({movie}) => {
    const { Poster, Year, Title } = movie;
  return (
    <article className='w-52 h-48'>
        <div className='w-full h-28 rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover' src={Poster} alt="" />
        </div>

        <div className='text-slate-400 flex gap-3 mt-2'>
            <span>{Year}</span> <span>Movie</span> <span>PG</span> 
        </div>
        <h3 className='text-white text-2xl font-semibold line-clamp-2'>{Title}</h3>
    </article>
  )
}

export default CardResult