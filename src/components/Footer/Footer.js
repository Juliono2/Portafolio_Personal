import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer() {

  const linkedinProfileUrl = 'https://www.linkedin.com/in/julián-andrés-sánchez-rivera-592569296';

    return (
      <footer className="footer">
        <div className="social-networks">
          <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </div>
        <div className="footer-content">
          <h2>Julian <span>S</span>anchez</h2>
          <h6>Full Stack Developer</h6>
        </div>
      </footer>
    );
  }
  
  export default Footer;