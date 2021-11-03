import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/cox.webp';
import banner2 from '../../../images/rangamati.webp';
import banner3 from '../../../images/sylhet.webp';
import './Banner.css';
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block banner-img w-100'
            src={banner1}
            alt='First slide'
          />
          <Carousel.Caption>
            <div>
              <h1>Welcome To Travel BD</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block banner-img w-100'
            src={banner2}
            alt='Second slide'
          />
          <Carousel.Caption>
            <div>
              <h1>Welcome To Travel BD</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block banner-img w-100'
            src={banner3}
            alt='Third slide'
          />
          <Carousel.Caption>
            <div>
              <h1>Welcome To Travel BD</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
