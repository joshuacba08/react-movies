import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import MoviesRouter from "./MoviesRouter";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="auth/*" element={<AuthRouter />} />

          <Route path="/*" element={
              <PrivateRoute>
                  <MoviesRouter />
              </PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;
