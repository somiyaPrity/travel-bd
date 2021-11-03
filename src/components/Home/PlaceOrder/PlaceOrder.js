import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hook/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { user } = useAuth();
  const { bookId } = useParams();
  const [packages, setPackages] = useState([]);
  // get package
  useEffect(() => {
    fetch('https://whispering-harbor-60401.herokuapp.com/packages')
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  // find packages
  const currentPackage = [];
  for (let item of packages) {
    if (item._id === bookId) {
      currentPackage.push(item);
    }
  }

  // redirect
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.email = user.email;
    data.name = user.displayName;
    currentPackage.map((item) => {
      data.place = item.place;
      data.price = item.price;
      data.duration = item.duration;
      data.img = item.img;
      data.status = 'pending...';
    });
    console.log(data);
    axios
      .post('https://whispering-harbor-60401.herokuapp.com/order', data)
      .then(function (res) {
        if (res.data.insertedId) {
          alert('order placed');
          reset();
        }
      });
  };

  return (
    <div>
      <Container>
        <div>
          <h1 className='all-header'>Place An order</h1>
        </div>
        {currentPackage.map((currentPackage) => (
          <div>
            <img style={{ width: '500px' }} src={currentPackage.img} alt='' />
            <h3>{currentPackage.place}</h3>
            <p>{currentPackage.duration}</p>
            <p>{currentPackage.price}</p>
          </div>
        ))}
        <div className='place-order'>
          <br />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              {...register('address', { required: true })}
              placeholder='Enter your address'
            />
            {errors.address?.type === 'required' && '*place name is required'}

            <input className='package-btn' type='submit' />
          </form>

          <br />
        </div>
      </Container>
    </div>
  );
};

export default PlaceOrder;
