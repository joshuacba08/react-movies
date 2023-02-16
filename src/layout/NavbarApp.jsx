import React, { useState } from "react";
import logo from "../assets/images/icons8-claqueta-de-cine-100.png";
import {
  BsGridFill,
  BsFilm,
  BsTvFill,
  BsFillBookmarkHeartFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const NavbarApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector( state => state.auth.user );
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-slate-800 h-20 w-full px-4">
      <div className="h-full flex items-center justify-between gap-4">
        <img
          className="w-9 cursor-pointer"
          src={logo}
          alt="logo de la plataforma"
          onClick={()=>{ navigate('/home') }}
        />


        <nav className="flex items-center gap-6 text-2xl text-white">
          <button className="" onClick={()=>{ navigate('/home') }}>
            <BsGridFill />
          </button>
          <button className="" onClick={()=>{ navigate('/favorites') }}>
            <BsFillBookmarkHeartFill />
          </button>
        </nav>

        <div className="relative">
          <button
            className="w-12 h-12 rounded-full overflow-hidden border-stone-50 border-solid border-2"
            onClick={handleClick}
          >
            <img
              className="w-full h-full object-cover"
              src={user.avatar}
              alt="foto de usuario"
            />
          </button>
          {showDropdown && (
            <div className="bg-slate-100 p-3 rounded absolute right-0">
              <div onClick={()=>{
                dispatch( logout() );
                navigate('/auth/login');
              }} >Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavbarApp;
