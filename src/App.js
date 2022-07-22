import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from "./router/protected";
import UnProtectedRoute from "./router/unprotected";


// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Register from './pages/Register'
import Admin from './pages/admin'
import Profile from './pages/profile';
const App = () => {
  return (
    <div className="max-w-[7680px] mx-auto bg-cyan-300">
      <Header />
      <Routes>
        <Route element={<UnProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
