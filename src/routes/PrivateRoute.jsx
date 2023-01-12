import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  return login ? (
    children
  ) : (
    <main className="w-screen h-screen bg-slate-900 flex justify-center items-center flex-col">
      <p className="text-white text-2xl font-semibold">
        Usuario no autenticado
      </p>
      <button
        className="rounded bg-indigo-600 text-white font-semibold py-2 px-3 mt-3"
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        Loguearse
      </button>
    </main>
  );
};

export default PrivateRoute;
