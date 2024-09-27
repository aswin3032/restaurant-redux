import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';

function RestView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row>
      <Col md={1}> </Col>
      <Col md={3}>
        <img width={'100%'} height={'100%'} src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D" alt="ERROR" />
         </Col>
         <Col md={7} className='px-5'> 
         <hr />
         <h4 className='text-center'><span className='text-success'>RESTAURANT</span> DETAILS</h4>
         <hr />
         <ListGroup>
      <ListGroup.Item className='text-center p-4'>Restuarant Name</ListGroup.Item>
      <ListGroup.Item>Neighborhod :</ListGroup.Item>
      <ListGroup.Item>Cuisine_type :</ListGroup.Item>
      <ListGroup.Item>Address :</ListGroup.Item>
      <ListGroup.Item  className='p-4 text-center'>
        <button className='btn btn-warning me-4' onClick={handleShow} >Operatoring Hours</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operatoring Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Mondat :</ListGroup.Item>
      <ListGroup.Item>Tuesday :</ListGroup.Item>
      <ListGroup.Item>Thursday :</ListGroup.Item>
      <ListGroup.Item>Friday :</ListGroup.Item>
      <ListGroup.Item>Saturday :</ListGroup.Item>
      <ListGroup.Item>Sunday :</ListGroup.Item>
    </ListGroup>

        </Modal.Body>
        
      </Modal>
      <RestReview/>
      </ListGroup.Item>
    </ListGroup>

         </Col>
         <Col md={1}> </Col>

    </Row>
  )
}

export default RestView