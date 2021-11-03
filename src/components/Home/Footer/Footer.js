import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#156e36', marginTop: '20px' }}>
      <Container>
        <div className='footer'>
          <div className='footer-address'>
            <h6>Address</h6>
            <p>House-0,Road-2,Block-L</p>
            <p>Banani,Dhaka-1213</p>
          </div>
          <div className='follow-us'>
            <h6>Follow Us On:</h6>
            {/* footer icon */}
            <div className='footer-icon'>
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
