import React, { useState } from 'react';

const Pantalla4 = () => {
  const [pregunta, setPregunta] = useState('');
  const [respuestaCorrecta, setRespuestaCorrecta] = useState('');
  const [retroalimentacion, setRetroalimentacion] = useState('');
  const [tipoPregunta, setTipoPregunta] = useState('');

  const handleAddPregunta = () => {
    // Implementación para agregar preguntas
  };

  const handleDownload = () => {
    // Implementación para descargar el cuestionario en formato Word
  };

  return (
    <div className="container">
      <h2>Crear Cuestionario</h2>

      <label className="input-label">Tipo de Pregunta:</label>
      <select className="input-field" value={tipoPregunta} onChange={(e) => setTipoPregunta(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Opción múltiple">Opción múltiple</option>
        <option value="Verdadero/Falso">Verdadero/Falso</option>
        <option value="Pregunta abierta">Pregunta abierta</option>
      </select>

      <label className="input-label">Pregunta:</label>
      <textarea className="input-field" value={pregunta} onChange={(e) => setPregunta(e.target.value)} />

      <label className="input-label">Respuesta Correcta:</label>
      <input className="input-field" type="text" value={respuestaCorrecta} onChange={(e) => setRespuestaCorrecta(e.target.value)} />

      <label className="input-label">Retroalimentación:</label>
      <textarea className="input-field" value={retroalimentacion} onChange={(e) => setRetroalimentacion(e.target.value)} />

      <div className="button-container">
        <button className="nav-button" onClick={handleAddPregunta}>Agregar Pregunta</button>
      </div>

      <div className="button-container">
        <button className="nav-button" onClick={() => navigate('/pantalla3')}>Volver</button>
        <button className="download-button" onClick={handleDownload}>Descargar Word</button>
      </div>
    </div>
  );
};

export default Pantalla4;
