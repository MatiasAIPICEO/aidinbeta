import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';
import Pantalla3 from './Pantalla3';
import Pantalla4 from './Pantalla4';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Pantalla1 />} />
          <Route path="/pantalla2" element={<Pantalla2 />} />
          <Route path="/pantalla3" element={<Pantalla3 />} />
          <Route path="/pantalla4" element={<Pantalla4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
