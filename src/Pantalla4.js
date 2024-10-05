import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver'; // Necesitarás instalar esta librería usando npm
import JSZip from 'jszip'; // Para crear el archivo QTI zip

const Pantalla4 = ({ nombreCurso, descripcionCursoProp }) => {
  const [cantidadPreguntas, setCantidadPreguntas] = useState(1);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState([]);
  const [retroalimentacion, setRetroalimentacion] = useState([]);
  const [descripcionCurso, setDescripcionCurso] = useState(descripcionCursoProp); // Corregido para hacer editable la descripción

  const navigate = useNavigate();

  const handleGenerarPreguntasIA = () => {
    const preguntasGeneradas = Array.from({ length: cantidadPreguntas }, (_, i) => `Pregunta ${i + 1} generada por IA`);
    const respuestasGeneradas = Array.from({ length: cantidadPreguntas }, (_, i) => `Respuesta correcta ${i + 1}`);
    const retroalimentacionGenerada = Array.from({ length: cantidadPreguntas }, (_, i) => `Retroalimentación para pregunta ${i + 1}`);
    
    setPreguntas(preguntasGeneradas);
    setRespuestasCorrectas(respuestasGeneradas);
    setRetroalimentacion(retroalimentacionGenerada);
  };

  // Función para generar contenido en formato CSV
  const generateCSVContent = () => {
    let csvContent = 'Pregunta,Respuesta Correcta,Retroalimentación\n';
    preguntas.forEach((pregunta, index) => {
      csvContent += `${pregunta},${respuestasCorrectas[index]},${retroalimentacion[index]}\n`;
    });
    return csvContent;
  };

  // Función para generar contenido en formato GIFT
  const generateGIFTContent = () => {
    let giftContent = '';
    preguntas.forEach((pregunta, index) => {
      giftContent += `${pregunta}\n{=${respuestasCorrectas[index]}}\n~${retroalimentacion[index]}\n`;
    });
    return giftContent;
  };

  // Función para generar contenido en formato QTI
  const generateQTIContent = async () => {
    const zip = new JSZip();

    // Generar el contenido del archivo imsmanifest.xml
    const manifestContent = `
      <?xml version="1.0" encoding="UTF-8"?>
      <manifest identifier="man1" version="1.1"
      xmlns="http://www.imsglobal.org/xsd/imscp_v1p1"
      xmlns:imsqti="http://www.imsglobal.org/xsd/imsqti_v2p1"
      xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2">
        <organizations />
        <resources>
          ${preguntas.map((_, index) => `
            <resource identifier="question${index + 1}" type="imsqti_item_xmlv2p1"
              href="question${index + 1}.xml">
              <file href="question${index + 1}.xml" />
            </resource>
          `).join('')}
        </resources>
      </manifest>
    `;

    // Agregar el imsmanifest.xml al archivo ZIP
    zip.file('imsmanifest.xml', manifestContent);

    // Generar preguntas en formato QTI y agregarlas al archivo ZIP
    preguntas.forEach((pregunta, index) => {
      const questionContent = `
        <?xml version="1.0" encoding="UTF-8"?>
        <assessmentItem xmlns="http://www.imsglobal.org/xsd/imsqti_v2p1"
        identifier="question${index + 1}" title="${pregunta}">
          <responseDeclaration identifier="RESPONSE" cardinality="single" baseType="identifier">
            <correctResponse>
              <value>${respuestasCorrectas[index]}</value>
            </correctResponse>
          </responseDeclaration>
          <itemBody>
            <choiceInteraction responseIdentifier="RESPONSE" shuffle="false" maxChoices="1">
              <prompt>${pregunta}</prompt>
              <simpleChoice identifier="correct">${respuestasCorrectas[index]}</simpleChoice>
              <simpleChoice identifier="incorrect1">Incorrecta 1</simpleChoice>
              <simpleChoice identifier="incorrect2">Incorrecta 2</simpleChoice>
              <simpleChoice identifier="incorrect3">Incorrecta 3</simpleChoice>
            </choiceInteraction>
          </itemBody>
        </assessmentItem>
      `;
      zip.file(`question${index + 1}.xml`, questionContent);
    });

    // Generar el archivo ZIP
    const content = await zip.generateAsync({ type: 'blob' });
    return content;
  };

  const handleDownload = async (format) => {
    if (format === 'qti') {
      const qtiContent = await generateQTIContent();
      saveAs(qtiContent, 'questions-qti.zip');
    } else if (format === 'csv') {
      const csvContent = generateCSVContent();
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'questions.csv');
    } else if (format === 'gift') {
      const giftContent = generateGIFTContent();
      const blob = new Blob([giftContent], { type: 'text/plain;charset=utf-8;' });
      saveAs(blob, 'questions.gift');
    } else if (format === 'word') {
      const wordContent = generateCSVContent(); // Generando contenido similar al CSV
      const blob = new Blob([wordContent], { type: 'application/msword;charset=utf-8;' });
      saveAs(blob, 'questions.doc');
    }
  };

  return (
    <div className="container">
      <h2>Generador de Cuestionarios</h2>

      <label className="input-label">Nombre del curso/taller:</label>
      <input className="input-field" type="text" value={nombreCurso} readOnly />

      <label className="input-label">Descripción del curso/taller (editable para generar preguntas):</label>
      <textarea
        className="input-field"
        value={descripcionCurso}
        onChange={(e) => setDescripcionCurso(e.target.value)}
      />

      <label className="input-label">Cantidad de preguntas:</label>
      <input
        className="input-field"
        type="number"
        value={cantidadPreguntas}
        onChange={(e) => setCantidadPreguntas(Number(e.target.value))}
        min="1"
      />

      <button className="add-button" onClick={handleGenerarPreguntasIA}>Generar preguntas con IA</button>

      <h3>Preguntas generadas:</h3>
      <ul>
        {preguntas.map((pregunta, index) => (
          <li key={index}>
            {pregunta}
            <br />
            Respuesta correcta: {respuestasCorrectas[index]}
            <br />
            Retroalimentación: {retroalimentacion[index]}
          </li>
        ))}
      </ul>

      {/* Botones de descarga */}
      <div className="button-container-right">
        <button className="download-button" onClick={() => handleDownload('qti')}>Descargar en formato QTI (Blackboard)</button>
        <button className="download-button" onClick={() => handleDownload('csv')}>Descargar en formato CSV (Canvas)</button>
        <button className="download-button" onClick={() => handleDownload('gift')}>Descargar en formato GIFT (Moodle)</button>
        <button className="download-button" onClick={() => handleDownload('word')}>Descargar en formato Word</button>
      </div>

      {/* Botón de volver */}
      <button className="nav-button-left" onClick={() => navigate('/pantalla3')}>Volver</button>
    </div>
  );
};

export default Pantalla4;
