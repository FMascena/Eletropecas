import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_kvq7nou';
    const templateID = 'template_d0ismc6';
    const userID = 'YFrSONqHgQtGN4EjI';

    try {
      await emailjs.sendForm(serviceID, templateID, e.currentTarget, userID);
      alert('Mensagem enviada com sucesso!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className='avaliations-background'>
        <h1 className='titulo-avaliations'>Contato</h1>
      </div>

      <div className="contact-page" id="contact">
        <div className="map-container">
          <iframe
            title="Localização da Empresa"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAZDMSDCawk_lKI4fIXbBxpVwgJ8fSKO3E&q=Eletropeças, Rua+General+Lima+da+Silva,+85+-+Aerolândia,+Fortaleza+-+CE,+60850-430`}
            width={100}
            height={400}
            frameBorder={0}
          ></iframe>
        </div>
        <div className="contact-form">
          <h2 className='titulo-form'>Entre em Contato</h2>
          <form className='form-container' onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;