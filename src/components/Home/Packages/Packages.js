import React, { useEffect, useState } from 'react';
//import { useContext } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';
//import { PackagesContext } from '../../../App';
import Package from '../Package/Package';

const Packages = () => {
  // const packages = useContext(PackagesContext);
  const { isLoading } = useAuth();
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('https://whispering-harbor-60401.herokuapp.com/packages')
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  if (isLoading) {
    return <Spinner animation='grow' variant='success' />;
  }
  return (
    <div>
      <div id='packages'>
        <Container className='mt-5'>
          <div>
            <h2 className='all-header'>Our Packages</h2>
          </div>
          <Row xs={1} lg={4} md={3} className='g-4'>
            {packages.map((ourPackage) => (
              <Package key={ourPackage.key} ourPackage={ourPackage}></Package>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Packages;
