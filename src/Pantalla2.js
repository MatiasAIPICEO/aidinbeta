import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la navegación entre pantallas

const Pantalla2 = () => {
  const navigate = useNavigate(); // Usamos useNavigate para cambiar entre pantallas
  const [nombreCurso, setNombreCurso] = useState('');
  const [descripcionCurso, setDescripcionCurso] = useState('');
  const [publicoObjetivo, setPublicoObjetivo] = useState('');
  const [duracionSemanas, setDuracionSemanas] = useState('');
  const [objetivoGeneral, setObjetivoGeneral] = useState('');
  const [objetivosEspecificos, setObjetivosEspecificos] = useState('');
  const [objetivosAprendizaje, setObjetivosAprendizaje] = useState('');
  const [tipoEvaluacion, setTipoEvaluacion] = useState('');
  const [requisitosPrevios, setRequisitosPrevios] = useState('');
  const [enfoquePedagogico, setEnfoquePedagogico] = useState('');
  const [actividadesAprendizaje, setActividadesAprendizaje] = useState('');
  const [retroalimentacion, setRetroalimentacion] = useState('');
  const [interaccion, setInteraccion] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [accesibilidad, setAccesibilidad] = useState('');
  const [cronograma, setCronograma] = useState('');

  const handleDownload = () => {
    // Implementación del botón de descarga
  };

  const handleAnterior = () => {
    navigate('/'); // Regresa a la pantalla 1
  };

  const handleSiguiente = () => {
    navigate('/pantalla3'); // Avanza a la pantalla 3
  };

  return (
    <div className="pantalla2-container">
      <h2>Información del curso</h2>

      <label className="input-label">Nombre del curso/taller:</label>
      <input className="input-field" type="text" value={nombreCurso} onChange={(e) => setNombreCurso(e.target.value)} />

      <label className="input-label">Descripción del curso/taller:</label>
      <textarea className="input-field" value={descripcionCurso} onChange={(e) => setDescripcionCurso(e.target.value)} />

      <label className="input-label">Público objetivo:</label>
      <select className="input-field" value={publicoObjetivo} onChange={(e) => setPublicoObjetivo(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Estudiantes">Estudiantes</option>
        <option value="Docentes">Docentes</option>
        <option value="Administrativos">Administrativos</option>
        <option value="Profesionales">Profesionales</option>
        <option value="Otros">Otros</option>
      </select>

      <label className="input-label">Duración del curso/taller en semanas:</label>
      <input className="input-field" type="number" value={duracionSemanas} onChange={(e) => setDuracionSemanas(e.target.value)} />

      <label className="input-label">Objetivo General del curso/taller:</label>
      <textarea className="input-field" value={objetivoGeneral} onChange={(e) => setObjetivoGeneral(e.target.value)} />

      <label className="input-label">Objetivos específicos del curso/taller:</label>
      <textarea className="input-field" value={objetivosEspecificos} onChange={(e) => setObjetivosEspecificos(e.target.value)} />

      <label className="input-label">Objetivos de aprendizaje del curso/taller:</label>
      <textarea className="input-field" value={objetivosAprendizaje} onChange={(e) => setObjetivosAprendizaje(e.target.value)} />

      <label className="input-label">Tipo de evaluación del curso/taller:</label>
      <select className="input-field" value={tipoEvaluacion} onChange={(e) => setTipoEvaluacion(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Examen final">Examen final</option>
        <option value="Trabajo en equipo">Trabajo en equipo</option>
        <option value="Evaluación continua">Evaluación continua</option>
      </select>

      {/* Nuevos elementos agregados */}
      <label className="input-label">Requisitos previos del curso/taller:</label>
      <select className="input-field" value={requisitosPrevios} onChange={(e) => setRequisitosPrevios(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Ninguno">Ninguno</option>
        <option value="Conocimientos previos">Conocimientos previos</option>
        <option value="Experiencia profesional">Experiencia profesional</option>
        <option value="Otro">Otro</option>
      </select>

      <label className="input-label">Enfoque pedagógico del curso/taller:</label>
      <select className="input-field" value={enfoquePedagogico} onChange={(e) => setEnfoquePedagogico(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Aprendizaje basado en proyectos">Aprendizaje basado en proyectos</option>
        <option value="Aprendizaje colaborativo">Aprendizaje colaborativo</option>
        <option value="Clase magistral">Clase magistral</option>
        <option value="Otro">Otro</option>
      </select>

      <label className="input-label">Actividades de aprendizaje del curso/taller:</label>
      <select className="input-field" value={actividadesAprendizaje} onChange={(e) => setActividadesAprendizaje(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Lecturas guiadas">Lecturas guiadas</option>
        <option value="Foros de discusión">Foros de discusión</option>
        <option value="Proyecto colaborativo">Proyecto colaborativo</option>
        <option value="Otro">Otro</option>
      </select>

      <label className="input-label">Mecanismos de retroalimentación del curso/taller:</label>
      <select className="input-field" value={retroalimentacion} onChange={(e) => setRetroalimentacion(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Retroalimentación continua">Retroalimentación continua</option>
        <option value="Comentarios en tareas">Comentarios en tareas</option>
        <option value="Foros de retroalimentación">Foros de retroalimentación</option>
        <option value="Otro">Otro</option>
      </select>

      <label className="input-label">Interacción y participación del curso/taller:</label>
      <select className="input-field" value={interaccion} onChange={(e) => setInteraccion(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Foros de discusión">Foros de discusión</option>
        <option value="Sesiones en vivo">Sesiones en vivo</option>
        <option value="Proyectos grupales">Proyectos grupales</option>
        <option value="Otro">Otro</option>
      </select>

      <label className="input-label">Plataforma de desarrollo del curso/taller:</label>
      <select className="input-field" value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="LMS (Moodle, Blackboard, Canvas)">LMS (Moodle, Blackboard, Canvas)</option>
        <option value="Videoconferencia (Zoom, Teams, Meet)">Videoconferencia (Zoom, Teams, Meet)</option>
        <option value="Herramientas colaborativas (Google Drive, One Drive, Trello)">Herramientas colaborativas (Google Drive, One Drive, Trello)</option>
        <option value="Otro">Otro</option>
      </select>

      <label className="input-label">Medidas de accesibilidad del curso/taller:</label>
      <select className="input-field" value={accesibilidad} onChange={(e) => setAccesibilidad(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Subtítulos en video">Subtítulos en video</option>
        <option value="Textos alternativos para imágenes">Textos alternativos para imágenes</option>
        <option value="Diseño accesible">Diseño accesible</option>
        <option value="Otro">Otro</option>
      </select>

      <label className="input-label">Cronograma del curso:</label>
      <select className="input-field" value={cronograma} onChange={(e) => setCronograma(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="Calendario semanal">Calendario semanal</option>
        <option value="Fechas importantes">Fechas importantes</option>
        <option value="Cronograma de entregas">Cronograma de entregas</option>
        <option value="Otro">Otro</option>
      </select>

      {/* Sección 2: Descripción del aprendizaje y contenidos */}
      <h3>Sección 2 – Descripción del aprendizaje y contenidos</h3>
      <table className="learning-table">
        <thead>
          <tr>
            <th>Aprendizaje esperado</th>
            <th>Objetivos de aprendizaje</th>
            <th>Unidades temáticas y contenidos</th>
            <th>Conocimientos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
            <td>1. DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
            <td>Módulo 1: DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
            <td>Conceptuales: DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Procedimentales: DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Actitudinales: DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
          </tr>
        </tbody>
      </table>

      {/* Sección 3: Evaluación */}
      <h3>Sección 3 – Evaluación</h3>
      <table className="evaluation-table">
        <thead>
          <tr>
            <th>Resultado de aprendizaje</th>
            <th>Objetivos de aprendizaje</th>
            <th>Tipo de evidencia</th>
            <th>Evidencia</th>
            <th>Instrumento de evaluación</th>
            <th>Contexto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
            <td>1. DEBE SER GENERADO Y COMPLETADO POR LA IA</td>
            <td>Conocimiento</td>
            <td>Cuestionario</td>
            <td>Solucionario</td>
            <td>Aula digital</td>
          </tr>
        </tbody>
      </table>

      {/* Sección 4: Referencias */}
      <h3>Sección 4 – Referencias</h3>
      <p>DEBE SER GENERADO Y COMPLETADO POR LA IA</p>

      {/* Botón de descarga centrado al final */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="download-button" onClick={handleDownload}>Descargar Word</button>
      </div>

      {/* Botones "Anterior" y "Siguiente" */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={handleAnterior}>Anterior</button>
        <button onClick={handleSiguiente}>Siguiente</button>
      </div>
    </div>
  );
};

export default Pantalla2;
