import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import './css/generador.css';

const Generador = () => {
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [pdfDataUri, setPdfDataUri] = useState('');

  useEffect(() => {
    const generateReport = () => {
      if (!name || !email || !apellido) {
        alert("Complete todos los campos.");
        return;
      }

      const doc = new jsPDF();

      doc.text('Informe de Usuario', 10, 10);
      doc.text('Nombre: ' + name, 10, 20);
      doc.text('Apellido: ' + apellido, 10, 30);
      doc.text('Correo Electrónico: ' + email, 10, 40);

      const pdfUri = doc.output('datauristring');
      setPdfDataUri(pdfUri);
    };

    window.generateReport = generateReport;
  }, [name, apellido, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.generateReport();
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Generación de PDF</h1>
        <form id="reportForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre: </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="apellido">Apellido: </label>
            <input
              className="form-control"
              type="text"
              id="apellido"
              name="lastname"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Correo Electrónico: </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">Generar Informe</button>
        </form>

        {pdfDataUri && (
          <iframe id='pdf' className='mt-5' src={pdfDataUri} title="PDF Report"></iframe>
        )}
      </div>

      
        
      
    </>
  );
};

export default Generador;
