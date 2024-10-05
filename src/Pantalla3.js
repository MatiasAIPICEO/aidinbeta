import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver'; // Librería para descargar el archivo Word

const Pantalla3 = ({ nombreCursoProp, descripcionCursoProp, objetivoGeneralProp }) => {
  const [codigo, setCodigo] = useState('');
  const [profesor, setProfesor] = useState('');
  const [correo, setCorreo] = useState('');
  const [horario, setHorario] = useState({
    lunes: { inicio: '', fin: '' },
    martes: { inicio: '', fin: '' },
    miercoles: { inicio: '', fin: '' },
    jueves: { inicio: '', fin: '' },
    viernes: { inicio: '', fin: '' },
    sabado: { inicio: '', fin: '' },
    domingo: { inicio: '', fin: '' },
  });
  const [lugar, setLugar] = useState('Sala presencial');
  const [cantidadObjetivos, setCantidadObjetivos] = useState(1);
  const [objetivosEspecificos, setObjetivosEspecificos] = useState([]);
  const [cantidadContenidos, setCantidadContenidos] = useState(1);
  const [contenidos, setContenidos] = useState([]);
  const [cantidadEvaluaciones, setCantidadEvaluaciones] = useState(1);
  const [evaluaciones, setEvaluaciones] = useState([{ nombre: 'Cuestionario', porcentaje: 100 }]);
  const [bibliografia, setBibliografia] = useState('Bibliografía generada por IA');

  const [nombreCurso, setNombreCurso] = useState(nombreCursoProp);
  const [descripcionCurso, setDescripcionCurso] = useState(descripcionCursoProp);
  const [objetivoGeneral, setObjetivoGeneral] = useState(objetivoGeneralProp);

  const navigate = useNavigate();

  const handleHorarioChange = (dia, tipo, value) => {
    setHorario((prev) => ({
      ...prev,
      [dia]: { ...prev[dia], [tipo]: value }
    }));
  };

  const handleEvaluacionesChange = (index, field, value) => {
    const nuevasEvaluaciones = [...evaluaciones];
    nuevasEvaluaciones[index][field] = field === 'porcentaje' ? Number(value) : value;
    setEvaluaciones(nuevasEvaluaciones);
  };

  // Actualizar la cantidad de evaluaciones
  const handleCantidadEvaluacionesChange = (e) => {
    const newCantidad = Number(e.target.value);
    setCantidadEvaluaciones(newCantidad);
    const nuevasEvaluaciones = [...evaluaciones];
    if (newCantidad > evaluaciones.length) {
      for (let i = evaluaciones.length; i < newCantidad; i++) {
        nuevasEvaluaciones.push({ nombre: 'Cuestionario', porcentaje: 0 });
      }
    } else {
      nuevasEvaluaciones.length = newCantidad;
    }
    setEvaluaciones(nuevasEvaluaciones);
  };

  const calcularTotalPorcentaje = () => {
    return evaluaciones.reduce((total, evaluacion) => total + evaluacion.porcentaje, 0);
  };

  const handleGenerarObjetivosEspecificos = () => {
    const objetivos = Array.from({ length: cantidadObjetivos }, (_, i) => `Objetivo específico ${i + 1} generado por IA.`);
    setObjetivosEspecificos(objetivos);
  };

  const handleGenerarContenidos = () => {
    const nuevosContenidos = Array.from({ length: cantidadContenidos }, (_, i) => `Contenido para semana ${i + 1} generado por IA.`);
    setContenidos(nuevosContenidos);
  };

  const handleGenerarBibliografia = () => {
    setBibliografia('Bibliografía generada automáticamente por IA.');
  };

  const handleDownload = () => {
    const syllabusContent = `
      Nombre del curso/taller: ${nombreCurso}
      Código: ${codigo}
      Profesor/a: ${profesor}
      Correo: ${correo}
      Horario de clases:
        Lunes: ${horario.lunes.inicio} - ${horario.lunes.fin}
        Martes: ${horario.martes.inicio} - ${horario.martes.fin}
        Miércoles: ${horario.miercoles.inicio} - ${horario.miercoles.fin}
        Jueves: ${horario.jueves.inicio} - ${horario.jueves.fin}
        Viernes: ${horario.viernes.inicio} - ${horario.viernes.fin}
        Sábado: ${horario.sabado.inicio} - ${horario.sabado.fin}
        Domingo: ${horario.domingo.inicio} - ${horario.domingo.fin}
      Lugar: ${lugar}
      Descripción del curso/taller: ${descripcionCurso}
      Objetivo general: ${objetivoGeneral}
      Objetivos específicos:
        ${objetivosEspecificos.join('\n        ')}
      Contenidos:
        ${contenidos.join('\n        ')}
      Evaluaciones:
        ${evaluaciones.map((evaluacion, i) => `Evaluación ${i + 1}: ${evaluacion.nombre}, ${evaluacion.porcentaje}%`).join('\n        ')}
      Bibliografía: ${bibliografia}
    `;

    const blob = new Blob([syllabusContent], { type: 'application/msword;charset=utf-8;' });
    saveAs(blob, 'syllabus.doc');
  };

  return (
    <div className="container">
      <h2>Syllabus</h2>

      {/* Nombre del curso/taller */}
      <label className="input-label">Nombre del curso/taller:</label>
      <input className="input-field" type="text" value={nombreCurso} readOnly />

      {/* Código, Profesor/a y Correo */}
      <label className="input-label">Código:</label>
      <input className="input-field" type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

      <label className="input-label">Profesor/a:</label>
      <input className="input-field" type="text" value={profesor} onChange={(e) => setProfesor(e.target.value)} />

      <label className="input-label">Correo:</label>
      <input className="input-field" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />

      {/* Horario de clases */}
      <h3>Horario de clases</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', alignItems: 'center' }}>
        <div><strong>Día</strong></div>
        <div><strong>Inicio</strong></div>
        <div><strong>Fin</strong></div>
        {Object.keys(horario).map((dia) => (
          <React.Fragment key={dia}>
            <div>{dia.charAt(0).toUpperCase() + dia.slice(1)}</div>
            <input
              type="time"
              value={horario[dia].inicio}
              onChange={(e) => handleHorarioChange(dia, 'inicio', e.target.value)}
            />
            <input
              type="time"
              value={horario[dia].fin}
              onChange={(e) => handleHorarioChange(dia, 'fin', e.target.value)}
            />
          </React.Fragment>
        ))}
      </div>

      {/* Lugar */}
      <label className="input-label">Lugar:</label>
      <select className="input-field" value={lugar} onChange={(e) => setLugar(e.target.value)}>
        <option value="Sala presencial">Sala presencial</option>
        <option value="LMS">LMS</option>
        <option value="Videoconferencia">Videoconferencia</option>
        <option value="Grabación">Grabación</option>
      </select>

      {/* Descripción del curso/taller */}
      <h3>Descripción del curso/taller</h3>
      <textarea className="input-field" value={descripcionCurso} onChange={(e) => setDescripcionCurso(e.target.value)} />

      {/* Objetivo general */}
      <h3>Objetivo general del curso/taller</h3>
      <textarea className="input-field" value={objetivoGeneral} onChange={(e) => setObjetivoGeneral(e.target.value)} />

      {/* Objetivos específicos */}
      <label className="input-label">Cantidad de Objetivos Específicos:</label>
      <input className="input-field" type="number" value={cantidadObjetivos} onChange={(e) => setCantidadObjetivos(Number(e.target.value))} />
      <button onClick={handleGenerarObjetivosEspecificos}>Generar Objetivos Específicos</button>
      <ul>
        {objetivosEspecificos.map((obj, i) => (
          <li key={i}>{obj}</li>
        ))}
      </ul>

      {/* Contenidos */}
      <h3>Contenido del curso/taller</h3>
      <label className="input-label">Cantidad de Contenidos:</label>
      <input className="input-field" type="number" value={cantidadContenidos} onChange={(e) => setCantidadContenidos(Number(e.target.value))} />
      <button onClick={handleGenerarContenidos}>Generar Contenidos</button>
      <ul>
        {contenidos.map((contenido, i) => (
          <li key={i}>Semana {i + 1}: {contenido}</li>
        ))}
      </ul>

      {/* Evaluaciones */}
      <h3>Evaluaciones</h3>
      <label className="input-label">Cantidad de Evaluaciones:</label>
      <input className="input-field" type="number" value={cantidadEvaluaciones} onChange={handleCantidadEvaluacionesChange} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div><strong>Evaluación</strong></div>
        <div><strong>%</strong></div>
        {evaluaciones.map((evaluacion, i) => (
          <React.Fragment key={i}>
            <select
              className="input-field"
              value={evaluacion.nombre}
              onChange={(e) => handleEvaluacionesChange(i, 'nombre', e.target.value)}
            >
              <option value="Cuestionario">Cuestionario</option>
              <option value="Foro">Foro</option>
              <option value="Trabajo individual">Trabajo individual</option>
              <option value="Trabajo en equipo">Trabajo en equipo</option>
              <option value="Presentación">Presentación</option>
              <option value="Informe">Informe</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              className="input-field"
              type="number"
              value={evaluacion.porcentaje}
              onChange={(e) => handleEvaluacionesChange(i, 'porcentaje', e.target.value)}
              min="0"
              max="100"
            />
          </React.Fragment>
        ))}
      </div>
      <p>Total porcentaje: {calcularTotalPorcentaje()}%</p>
      {calcularTotalPorcentaje() !== 100 && <p style={{ color: 'red' }}>El total debe sumar 100%</p>}

      {/* Bibliografía */}
      <h3>Bibliografía</h3>
      <p>{bibliografia}</p>
      <button onClick={handleGenerarBibliografia}>Generar Bibliografía</button>

      {/* Botones */}
      <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className="nav-button" onClick={() => navigate('/pantalla2')} style={{ backgroundColor: '#1E90FF', color: '#fff', borderRadius: '5px', padding: '10px 20px' }}>Volver</button>
        <button className="nav-button" onClick={() => navigate('/pantalla4')} style={{ backgroundColor: '#1E90FF', color: '#fff', borderRadius: '5px', padding: '10px 20px' }}>Siguiente</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="download-button" onClick={handleDownload} style={{ backgroundColor: '#1E90FF', color: '#fff', borderRadius: '5px', padding: '10px 20px' }}>Descargar Word</button>
      </div>
    </div>
  );
};

export default Pantalla3;
