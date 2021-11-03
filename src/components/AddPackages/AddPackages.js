import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';
import './AddPackages.css';
import axios from 'axios';
const AddPackages = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://whispering-harbor-60401.herokuapp.com/packages', data)
      .then(function (res) {
        if (res.data.insertedId) {
          alert('item added');
          reset();
        }
      });
  };
  return (
    <div>
      <Container className='mt-5'>
        <h1 className='all-header'>Add more packages</h1>

        <div className='add-package'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              {...register('place', { required: true })}
              placeholder='Enter place name'
            />
            {errors.place?.type === 'required' && '*place name is required'}
            <input
              type='text'
              {...register('duration', { required: true })}
              placeholder='Enter package duration'
            />
            {errors.duration?.type === 'required' &&
              '*package duration is required'}
            <input
              type='number'
              {...register('price', { required: true })}
              placeholder='Enter package Price'
            />
            {errors.price?.type === 'required' && '*price is required'}
            <input
              {...register('rating', { required: true })}
              placeholder='Enter rating'
            />
            {errors.rating?.type === 'required' && '*rating is required'}
            <input
              {...register('img', { required: true })}
              placeholder='Enter img url'
            />
            {errors.img?.type === 'required' && '*Img is required'}
            <input className='package-btn' type='submit' />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddPackages;
