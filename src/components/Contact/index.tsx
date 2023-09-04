import './index.css';

const Contact = () => {

  return (
    <div className="contact-page" id="contact">
      <div className="map-container">
        <iframe
          title="Localização da Empresa"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAZDMSDCawk_lKI4fIXbBxpVwgJ8fSKO3E&q=Eletropeças, Rua+General+Lima+da+Silva,+85+-+Aerolândia,+Fortaleza+-+CE,+60850-430`}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
      </div>
      <div className="contact-form">
        <h2 className='titulo-form'>Entre em Contato</h2>
        <form className='form-container'>
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Nome" />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Telefone" />
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
