import { Link } from "react-router-dom";

const ProductItem = ({product, addToCart, removeFromCart, cart}) => {

  const productId = product.id
  const isProductInCart = cart.some(item => item.id === productId);
  
  return (
    <>
      <style jsx>{`
        .btnCustome {
          padding: 5px;
          border: 1px solid black;
          border-radius: 5px;
          color: black;
          text-decoration: none;
          background: white;
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
      <div 
        className="card d-flex flex-column my-4 mx-4 text-center" 
        style={{width: '18rem', boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)'}}
      >
          <img 
            src={product.image} 
            className="card-img-top p-4" 
            alt={product.title} 
            style={{ width: '100%', maxHeight: '300px'}}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{product.title}</h5>
            <p>Price: <span style={{fontWeight: 'bold'}}>{product.price}$</span></p>
            <p>Category: <span style={{fontWeight: 'bold'}}>{product.category}</span></p>
            <div className="d-flex flex-row justify-content-around">
              <Link 
                to={`/products/${product.id}`}
                className="btnCustome"
              >
                Read more
              </Link>
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
    </>
  )
}

export default ProductItem;
