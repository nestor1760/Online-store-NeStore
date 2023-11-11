import React from 'react';
import './OrderCompleted.css'
import { Link } from 'react-router-dom';

const OrderCompleted = () => {
  return (
    <div className='orderContainer'>
        <h1>Thanks for your order!</h1>
        <h3>Our team will contact you to confirm the order.</h3>
        <div className='btnContainer'>
          <Link to='/' className='btnItem'>Go home</Link>
          <Link to='/products' className='btnItem'>Go store</Link>
        </div>
    </div>
  )
}

export default OrderCompleted;
