import React from 'react';
import logo from '../assets/images/icons8-claqueta-de-cine-100.png'
import { BsGridFill, BsFilm, BsTvFill, BsFillBookmarkHeartFill } from "react-icons/bs";

const NavbarApp = () => {

  const avatar = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg';

  return (
    <header className='bg-slate-800 h-20 w-full px-4'>

      <div className='h-full flex items-center justify-between gap-4'>

        <img className='w-9 cursor-pointer'src={logo} alt="logo de la plataforma" />

        <nav className='flex items-center gap-6 text-2xl text-white'>
          <button className=''>
            <BsGridFill />
          </button>
          <button className=''>
            <BsFilm />
          </button>
          <button className=''>
            <BsTvFill />
          </button>
          <button className=''>
            <BsFillBookmarkHeartFill />
          </button>
        </nav>

        <div className='w-12 h-12 rounded-full overflow-hidden border-stone-50 border-solid border-2'>
          <img className='w-full h-full object-cover' src={avatar} alt="foto de usuario" />
        </div>


      </div>
      

    </header>
  )
}

export default NavbarApp