import React from 'react';
import './Contact.css';
import UnWapo from '../../assets/UnWapo.png';
import FondoDegradao2 from '../../assets/FondoDegradao2.png';

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-heading">
        <h2>Contactame</h2>
        <div className="divider"></div>
      </div>
      <div className="container-contact">
        <div className="container-images">
          <div className='contact-image'>
            <img src={UnWapo} alt="Un wapo" />
          </div>
          <div className="background-image">
            <img src={FondoDegradao2} alt="FondoDegradao2" />
          </div>
        </div>
        <div className="contact-form">
          <h4>
            Actualmente estoy buscando nuevas oportunidades laborales.
            Ya sea que tengas una pregunta o simplemente quieras saludar,
            ¡hare todo lo posible por responderte!
          </h4>
          <form className="form-group">
            <input type="text" placeholder="Nombre" className="input" />
            <input type="email" placeholder="Correo" className="input" />
            <textarea name="message" placeholder="Por favor deja tu mensaje aquí"></textarea>
            <button type="submit" className="btn-submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;