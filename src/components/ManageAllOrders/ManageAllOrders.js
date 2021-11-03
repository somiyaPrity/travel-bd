import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { isLoading } = useAuth();
  const statusRed = 'pending...';
  // get all order
  useEffect(() => {
    fetch('https://whispering-harbor-60401.herokuapp.com/order')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  if (isLoading) {
    return <Spinner animation='grow' variant='success' />;
  }
  //   update order status
  const updateStatus = (id) => {
    const status = { status: 'Approved' };
    fetch(`https://whispering-harbor-60401.herokuapp.com/order/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Order Approved');
          fetch('https://whispering-harbor-60401.herokuapp.com/order')
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }
      });
  };
  //   delete order
  const deleteOrder = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      axios
        .delete(`https://whispering-harbor-60401.herokuapp.com/order/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            alert('Order deleted');
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  };
  return (
    <div>
      <Container className='mt-5'>
        <p className='all-header mb-2'>Total order: {orders.length}</p>

        <div>
          <Table responsive='sm md lg' striped bordered hover>
            <thead>
              <tr>
                <th>List</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Place Name</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Status</th>
                <th>Approve Order</th>
                <th>Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td> {orders.indexOf(order) + 1}</td>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.place}</td>
                  <td>{order.duration}</td>
                  <td>{order.price}</td>
                  <td>
                    <p
                      className={
                        order.status === statusRed
                          ? 'status-red'
                          : 'status-green'
                      }
                    >
                      {order.status}
                    </p>
                  </td>
                  <td>
                    <button
                      className='approve-btn'
                      onClick={() => updateStatus(order._id)}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </button>
                  </td>
                  <td>
                    <button
                      className='delete-btn'
                      onClick={() => deleteOrder(order._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ManageAllOrders;
