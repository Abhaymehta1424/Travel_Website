import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Services from './components/pages/About';
import Products from './components/pages/Photos';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes> 
       </Router>
    </>
  );
}

export default App;
