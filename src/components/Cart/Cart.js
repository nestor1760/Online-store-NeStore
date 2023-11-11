import { useEffect, useState } from 'react'
import style from './Cart.module.css'
import { Link } from 'react-router-dom'

const Cart = ({cart, visible, setVisible, filterCart}) => {
  const initialState = cart.map(item => 0)
  const [counts, setCounts] = useState(initialState)
  const cartHeader = `Your cart items (${cart.length} items)`;
  
  const shippingPrice = cart.length > 0 ? 25 : 0
  
  const grandTotalPrice = (Number(calculateTotalPrice()) + Number(shippingPrice)).toFixed(2)

  const closeModal = (e) => {
    e.preventDefault()
    setVisible(visible = false)
  }

useEffect(() => {
    const newInitialState = cart.map(item => {
    const existingCount = counts[cart.findIndex(i => i.id === item.id)]
    return existingCount !== undefined ? existingCount : 1
  })
  setCounts(newInitialState)
}, [cart])

  function increment (index) {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  }

  function decrement (index) {
    if (counts[index] > 1) {
      const updatedCounts = [...counts];
      updatedCounts[index] -= 1;
      setCounts(updatedCounts);
    }
  }

  function calculateTotalPrice() {
    const totalPrice = cart.reduce((total, item, index) => {
      return total + item.price * counts[index];
    }, 0);
  
    return totalPrice.toFixed(2);
  }

  return (
    <div className={style.cart}>
        <div className={style.cartTitle}>
          <h3>{cartHeader}</h3>
          <button onClick={closeModal} className={style.closeBtn}>X</button>
        </div>
      <>
        <div className={style.cartRow} style={{width: (cart.length > 0) ? '80%': '100%'}}>
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className={style.cartItemRow}>
          {
            cart.length > 0
              ?
                cart.map((item, index) => 
                  <div
                    key={item.id}
                    className={style.cartItem}
                  >
                    <div className={style.itemInfo}>
                      <img className={style.itemImg} src={item.image} alt={item.title}/>
                      <p className={style.itemTitle}>{item.title}</p>
                    </div>
                    <div>
                      ${item.price}
                    </div>
                    <div>
                      <div className={style.counter}>
                        <button onClick={() => increment(index)}>+</button>
                          <div>{counts[index]}</div>
                        <button onClick={() => decrement(index)}>-</button>
                      </div>
                    </div>
                    <div>
                      {`$ ${(item.price * counts[index]).toFixed(2)}`}
                    </div>
                    <button className={style.btnDeleteItem} onClick={() => filterCart(item)}>
                      Delete item
                    </button>
                  </div>
                )
              :
                <div 
                  style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'column',
                    width: '100%', 
                    height: '200px',
                  }}>
                  <h3 style={{marginBottom: '40px'}}>Your cart is empty...</h3>
                  <div onClick={closeModal}>
                    <Link to='/products' className={style.goToStoreBtn}>Go to store</Link>
                  </div>
                </div>
          }
        </div>
      </>
      <>
        <div className={style.cartFooterRow}>
          <div className={style.cartFooterItem}>
            <span style={{fontWeight: 'bold'}}>Subtotal:</span> {`$ ${calculateTotalPrice()}`} 
          </div>
          <div className={style.cartFooterItem}>
            <span style={{fontWeight: 'bold'}}>Shipping Price:</span> $ {shippingPrice} 
          </div>
          <div className={style.cartFooterItem}>
            <span style={{fontWeight: 'bold'}}>Coupon Code: </span> <a href='#' style={{color: 'gray'}}>Add Coupon</a> 
          </div>
          <div className={style.cartFooterItem}>
            <span style={{fontWeight: 'bold'}}>Grand total:</span> <span style={{fontSize: '20px'}}>{`$ ${grandTotalPrice}`}</span> 
          </div>
          <div onClick={closeModal}>
            <Link to='/payment' className={style.checkOutBtn}>Check out</Link>
          </div>
        </div>
      </>  
    </div>
  )
}

export default Cart;
