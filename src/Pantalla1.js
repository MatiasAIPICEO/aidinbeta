// src/Pantalla1.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pantalla1() {
  const [nombreCurso, setNombreCurso] = useState('');
  const [descripcionCurso, setDescripcionCurso] = useState('');
  const navigate = useNavigate();

  const handleGenerate = () => {
    navigate('/pantalla2', {
      state: {
        nombreCurso,
        descripcionCurso,
      },
    });
  };

  return (
    <div className="pantalla1-container">
      <label className="input-label">Nombre del curso/taller:</label>
      <input
        type="text"
        className="input-field"
        value={nombreCurso}
        onChange={(e) => setNombreCurso(e.target.value)}
      />
      <label className="input-label">Descripción del curso/taller:</label>
      <textarea
        className="input-field"
        value={descripcionCurso}
        onChange={(e) => setDescripcionCurso(e.target.value)}
      />
      <button className="generate-button" onClick={handleGenerate}>Generar con IA</button>
    </div>
  );
}

export default Pantalla1;
