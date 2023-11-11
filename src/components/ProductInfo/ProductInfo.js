import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';

const ProductInfo = ({addToCart, cart, removeFromCart}) => {
  const [product, setProduct] = useState([])
  const navigate = useNavigate()

  const productId = product.id
  const isProductInCart = cart.some(item => item.id === productId);


  const {title, price, description, category, image, rating: { rate = 0 } = {}} = product  
  const {id} = useParams()

  const api = `https://fakestoreapi.com/products/${id}`

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api])

  async function fetchData() {
    try {
      const responce = await fetch(api)
      const data = await responce.json()
      setProduct(data)
    } catch (e) {
      console.error(e)
    }
  }

  const cardContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const card = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '900px',
    height: '100%',
    borderRadius: '5px',
    margin: '30px 10px',
    padding: '20px',
    boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
  };

  const img = {
    width: '400px',
    height: '100%',
    padding: '30px',

  };

  const titleProduct = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
    textAlign: 'start'
  };

  const info = {
    fontSize: '1rem',
    textAlign: 'start'
  };

  const cardInfo = {
    textAlign: 'start',
    padding: '10px'
  };

  return (
    <>
    <style jsx>{`
        .btnCustome {
          padding: 5px;
          border: 1px solid black;
          border-radius: 5px;
          color: black;
          text-decoration: none;
          transition: 0.3s;
        }
        .btnCustome:hover {
          background: black;
          color: white;
        }
        .btnCustomeRemove {
          padding: 5px;
          border: 1px solid black;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          background: gray;
          transition: 0.3s;
          margin-left: 5px;
        }
        .btnCustomeRemove:hover {
          background: black;
          color: white;
        }
      `}</style>
    <Intro />
      <div style={cardContainer}>
        <div style={card}>
          <img 
            src={image} 
            style={img} 
            alt={title} 
          />
          <div style={cardInfo}>
            <button
              onClick={() => navigate(-1)}
              className='btnCustome'
            >
              Go back
            </button>
            <h3 style={titleProduct}>
              {title}
            </h3>
            <div style={info}>
            <p>
              Rating: <span style={{fontWeight: 'bold', fontSize: '20px'}}>{rate}</span>
            </p>
              <span style={{fontWeight: 'bold'}}>Description:</span> {description}
            </div>
            <p>
              Category: <span style={{fontWeight: 'bold', fontSize: '20px'}}>{category}</span>
            </p>
            <p>
              Price: <span style={{fontWeight: 'bold', fontSize: '20px'}}>${price}</span>
            </p>
            {/* <button className='btnCustome' onClick={() => addToCart(product)}>
              Add to Cart
            </button> */}
            {isProductInCart 
              ? 
                (
                  <button onClick={() => removeFromCart(product)} className="btnCustomeRemove">
                    Remove from cart
                  </button>
                ) 
              : 
                (
                  <button onClick={() => addToCart(product)} className="btnCustome">
                    Add to cart
                  </button>
                )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductInfo;
