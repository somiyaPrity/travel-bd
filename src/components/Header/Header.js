import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hook/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    //   navbar
    <Navbar collapseOnSelect expand='lg' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand as={HashLink} to='/home#home'>
          Travel Bd
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav.Link as={HashLink} to='/home#home'>
            Home
          </Nav.Link>
          <Nav.Link as={HashLink} to='/home#about'>
            About Us
          </Nav.Link>
          <Nav.Link as={HashLink} to='/home#packages'>
            Packages
          </Nav.Link>

          {user?.email ? (
            <div className='private-btn'>
              <Nav.Link as={Link} to='/myOrder'>
                My Order
              </Nav.Link>
              <Nav.Link as={Link} to='/manageOrder'>
                Manage Order
              </Nav.Link>
              <Nav.Link as={Link} to='/addPackages'>
                Add Packages
              </Nav.Link>
              <Navbar.Text>
                <button onClick={logOut} className='package-btn'>
                  Logout
                </button>
                <FontAwesomeIcon icon={faUser} />
                <a href='#login'>{user?.displayName}</a>
              </Navbar.Text>
            </div>
          ) : (
            <Nav.Link as={Link} to='/login'>
              <button className='package-btn'>Login</button>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
