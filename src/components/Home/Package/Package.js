import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
  const { _id, place, duration, rating, img, price } = props.ourPackage;
  return (
    <div>
      <Card className='card-service'>
        <Card.Img className='img-fluid service-img' variant='top' src={img} />
        <Card.Body>
          <Card.Title>{place}</Card.Title>
          <Card.Text>{duration}</Card.Text>

          <Rating
            readonly
            initialRating={rating}
            emptySymbol='far fa-star rating-color'
            fullSymbol='fas fa-star rating-color '
          />
          <p>Price: BDT {price}</p>
          <br />
          <Link to={`/placeOrder/${_id}`}>
            <button className='package-btn'>Book Now</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Package;
