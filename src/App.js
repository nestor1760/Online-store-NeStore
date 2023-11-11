import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import dataProducts from './API/dataAPI'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductsPage from './components/Pages/Products';
import Home from './components/Pages/Home';
import Loader from './UI/Loader/Loader';
import About from './components/Pages/About';
import { Route, Routes } from 'react-router-dom';
import ProductInfo from './components/ProductInfo/ProductInfo';
import PaymentCard from './components/PaymentCard/PaymentCard';
import OrderCompleted from './components/OrderCompleted/OrderCompleted';

function App() {
  const [cart, setCart] = useState([])
  const {data, loading, error} = useSelector(state => state.products)
  const dispatch = useDispatch()
  const url = `https://fakestoreapi.com/products`;

  const addProductToCart = (product) => {
    const updateCart = [...cart, {...product, count: 1}]
    setCart(updateCart)
  }

  const removeProductFromCard = (product) => {
    const newCart = cart.filter(p => product.id !== p.id)
    setCart(newCart)
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(dataProducts(url))
    })
  }, [])
  
  if(loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="App">  
          <div className='App'>
            <Navbar cart={cart} filterCart={removeProductFromCard}/>
          </div>
        
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/products' element={<ProductsPage error={error} products={data} addToCart={addProductToCart} removeFromCart={removeProductFromCard} cart={cart}/>}/>
              <Route path='/products/:id' element={<ProductInfo addToCart={addProductToCart} removeFromCart={removeProductFromCard} cart={cart}/>}/>
              <Route path='/payment' element={<PaymentCard cart={cart}/>}/>
              <Route path='/ordercompleted' element={<OrderCompleted />}/>
          </Routes>
    </div> 
  );
}

export default App;
