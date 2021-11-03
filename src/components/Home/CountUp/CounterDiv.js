import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './CounterDiv.css';
const CounterDiv = () => {
  return (
    <div>
      <Container className='my-5 '>
        <Row xs={1} lg={4} md={3} className='g-4'>
          <Col className='counterColumn'>
            <div className='counter-content'>
              <CountUp end={75} duration={2} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>

              <p>DESTINATION</p>
            </div>
          </Col>
          <Col className='counterColumn'>
            <div className='counter-content'>
              <CountUp end={149} start={0} duration={2} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>

              <p className='tour-pack'>TOURS PACK</p>
            </div>
          </Col>
          <Col className='counterColumn'>
            <div className='counter-content'>
              <CountUp end={32} start={0} duration={2} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>

              <p className='cruises'>CRUISES</p>
            </div>
          </Col>
          <Col className='counterColumn'>
            <div className='counter-content'>
              <CountUp end={24} start={0} duration={2} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>

              <p className='support'>HOUR SUPPORT</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CounterDiv;
