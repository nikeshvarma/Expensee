import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import NotFound from './components/home/NotFound';
import Sidebar from './components/utils/Sidebar';
import { ProtectedRoute } from './components/utils/ProtectedRoute';

const App = () => {
  return (
    <>
      <Navbar className='brand d-md-none'>
        <Navbar.Brand>
          <strong style={{ color: 'white', marginLeft: '1rem' }}>Expensee</strong>
        </Navbar.Brand>
      </Navbar>

      <div className='d-flex'>
        <div><Sidebar /></div>
        <div className='p-3 flex-fill'>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>

    </>
  );
}

export default App;
