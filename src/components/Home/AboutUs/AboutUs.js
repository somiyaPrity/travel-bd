import React from 'react';
import './AboutUs.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className='extra-content'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
        molestiae quam mollitia quae magnam, earum, culpa aut ducimus ut
        provident sunt obcaecati nobis in reiciendis adipisci quidem voluptates?
        Aperiam, esse. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.Adipisci aliquid molestiae voluptatum corporis reiciendis ratione,
        magni quo repudiandae doloribus totam! Ratione aspernatur quae modi
        maiores, libero quos tenetur veritatis, aliquid.Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
      </p>
    </div>
  );
  const linkName = readMore ? 'Read Less < ' : 'Read More > ';
  return (
    <div id='about'>
      <Container>
        <div>
          <h2 className='all-header'>
            Why <span style={{ color: '#9D9D9D' }}>Choose Us</span>
          </h2>
        </div>
        <div>
          <p class='about-bd'>
            Welcome to our page, consectetur adipisicing elit. Dolorum molestiae
            quam mollitia quae magnam, earum, culpa aut ducimus ut provident
            sunt obcaecati nobis in reiciendis adipisci quidem voluptates?
            Aperiam, esse. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.Adipisci aliquid molestiae voluptatum corporis reiciendis
            ratione, magni quo repudiandae doloribus totam! Ratione aspernatur
            quae modi maiores, libero quos tenetur veritatis, aliquid.Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <p
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore && extraContent}
          <button className='read'>{linkName}</button>
        </p>
      </Container>
    </div>
  );
};

export default AboutUs;
