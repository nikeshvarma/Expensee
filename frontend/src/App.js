import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Header from './components/home/Header';
import Home from './components/home/Home';
import NotFound from './components/home/NotFound';
import { ProtectedRoute } from './components/utils/ProtectedRoute';

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
