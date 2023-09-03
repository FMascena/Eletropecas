import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="map-container">
        {/* Mapa do Google aqui */}
        {/* Substitua 'SUA_CHAVE_DE_API' pela sua chave de API do Google Maps */}
        <iframe
          title="Localização da Empresa"
          src={`https://www.google.com/maps/embed/v1/place?key=SUA_CHAVE_DE_API&q=ENDEREÇO_DA_EMPRESA`}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>Entre em Contato</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Nome" />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Telefone" />
            </div>
          </div>
          <div className="form-group">
            <input type="text" id="subject" name="subject" placeholder="Assunto" />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows="4" placeholder="Mensagem"></textarea>
          </div>
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
