import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function RestReview() {
  const [open, setOpen] = useState(false);
  return (
    <>
        <button onClick={() => setOpen(!open)} className='btn btn-success'>Cilk here to View the Reviews</button>
        <Collapse in={open}>
        <div className='mt-5'>
          <hr />
          <h6> name - date</h6>
          <p>Rating</p>
          <p>Discription</p>

        </div>
        </Collapse>
    </>
  )
}

export default RestReview