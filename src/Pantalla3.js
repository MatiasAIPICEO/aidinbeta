import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pantalla3 = ({ nombreCurso, descripcionCurso, objetivoGeneral, objetivosEspecificos }) => {
  const [codigo, setCodigo] = useState('');
  const [profesor, setProfesor] = useState('');
  const [correo, setCorreo] = useState('');
  const [horario, setHorario] = useState('');
  const [lugar, setLugar] = useState('');

  const navigate = useNavigate();

  const handleDownload = () => {
    // Implementación para descargar el syllabus en formato Word
  };

  return (
    <div className="container">
      <h2>Syllabus</h2>

      <label className="input-label">Curso:</label>
      <input className="input-field" type="text" value={nombreCurso} readOnly />

      <label className="input-label">Código:</label>
      <input className="input-field" type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

      <label className="input-label">Profesor/a:</label>
      <input className="input-field" type="text" value={profesor} onChange={(e) => setProfesor(e.target.value)} />

      <label className="input-label">Correo:</label>
      <input className="input-field" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />

      <label className="input-label">Horario de clases:</label>
      <input className="input-field" type="text" value={horario} onChange={(e) => setHorario(e.target.value)} />

      <label className="input-label">Lugar:</label>
      <input className="input-field" type="text" value={lugar} onChange={(e) => setLugar(e.target.value)} />

      <h3>1. Descripción del curso</h3>
      <textarea className="input-field" value={descripcionCurso} readOnly />

      <h3>2. Objetivos del curso</h3>
      <label className="input-label">Objetivo General:</label>
      <textarea className="input-field" value={objetivoGeneral} readOnly />

      <label className="input-label">Objetivos Específicos:</label>
      <textarea className="input-field" value={objetivosEspecificos} readOnly />

      <h3>3. Contenido</h3>
      <p>Semana 1: (Contenido de la semana 1 generado por la IA)</p>
      <p>Semana 2: (Contenido de la semana 2 generado por la IA)</p>
      <p>Semana 3: (Contenido de la semana 3 generado por la IA)</p>
      <p>Semana 4: (Contenido de la semana 4 generado por la IA)</p>

      <h3>4. Evaluación</h3>
      <p>Examen parcial</p>
      <p>Trabajo grupal</p>
      <p>Participación en clase</p>
      <p>Examen final</p>

      <h3>5. Bibliografía</h3>
      <p>(Bibliografía generada por la IA)</p>

      <div className="button-container">
        <button className="nav-button" onClick={() => navigate('/pantalla2')}>Anterior</button>
        <button className="nav-button" onClick={() => navigate('/pantalla4')}>Siguiente</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="download-button" onClick={handleDownload}>Descargar Word</button>
      </div>
    </div>
  );
};

export default Pantalla3;
