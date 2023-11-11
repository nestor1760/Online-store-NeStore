import React, { useState } from 'react';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from '../../UI/Modal/Modal';
import {Link, useLocation} from 'react-router-dom'
import Cart from '../Cart/Cart';

const Navbar = ({cart, filterCart}) => {
  let [visible, setVisible] = useState(false)
  const location = useLocation()

  const showModal = (e) => {
    e.preventDefault()
    setVisible(prev => !prev)
  }

  if(visible === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  
  return (
    <div className='navbar'>
      <div className='navbar-body'>
        <Link
          to='/'
          className='nav-logo'
        >
          NeStore
        </Link>
        <div className='nav-link text-dark '>
          <Link 
            to='/' 
            className={`nav-link text-dark ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to='/about'
            className={`nav-link text-dark ${location.pathname === '/about' ? 'active' : ''}`}

          >
            About
          </Link>
          <Link 
            to='/products'
            className={`nav-link text-dark ${location.pathname === '/products' ? 'active' : ''}`}
          >
            Store
          </Link>
        </div>
      </div>
      <div className='navbar-cart'>
        <div><FaShoppingCart size='1.5rem'/></div>
        <button className='button-cart' onClick={showModal}>Cart</button>
        <span className='cart-count'>{cart.length}</span>
      </div>
      <Modal visible={visible} setVisible={setVisible}>
        <Cart cart={cart} visible={visible} setVisible={setVisible} filterCart={filterCart}/>
      </Modal>
    </div>
  )
}

export default Navbar;


