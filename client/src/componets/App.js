import React, { Suspense } from 'react'

import {
  // BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Auth from '../hoc/auth'

// pages for this product
import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import NavBar from './views/NavBar/NavBar'
import Footer from './views/Footer/Footer'
import MovieDetail from './views/MovieDetail/MovieDetail';
import FavoritePage from './views/FavoritePage/FavoritePage';

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const AuthMovieDetailPage = Auth(MovieDetail, null);
  const AuthFavoritePage = Auth(FavoritePage, true);

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<AuthLandingPage />} />
            <Route path="/login" element={<AuthLoginPage />} />
            <Route path="/register" element={<AuthRegisterPage />} />
            <Route path="/movie/:movieId" element={<AuthMovieDetailPage />} />
            <Route path="/favorite" element={<AuthFavoritePage />} />
          </Routes>
        </div>
      <Footer />
    </Suspense>
  )
}

export default App
