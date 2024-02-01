import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Email from './Pages/Email/Email';
import Footer from './Components/Footer';
import Formulario from './Components/Formulario';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/email' element={<Email />} />
    </Routes>
  </Router>
  );
}

export default App;

