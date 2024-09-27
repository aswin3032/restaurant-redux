import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
         <Navbar variant='dark'>
        <Container>
          <Navbar.Brand href="" className='d-flex p-3' >
            <img
              alt=""
              src="https://www.iaea.org/sites/default/files/styles/original_image_size/public/str7803.jpg?itok=oYsZLbj9"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />{' '}
          <h4 className='mt-3 ms-4'> <span className='text-success'> Food</span> Circle</h4>
          
          </Navbar.Brand>
          <input type="text" placeholder='search by neighourhood' className='form-control w-25' />
        </Container>
      </Navbar>
    </>
  )
}

export default Header