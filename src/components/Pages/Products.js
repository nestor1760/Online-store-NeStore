import ProductItem from '../ProductItem/ProductItem';
import Error from '../Error/Error';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';
import Filters from '../Filters/Filters';
import { useState } from 'react';

const ProductsPage = ({products, error, addToCart, removeFromCart, cart}) => {
  const [selectedCategory, setSelectedCategory] = useState("Choose category...");

  const categoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(product => selectedCategory === "Choose category..." || product.category === selectedCategory);


  if(error) {
    return (
      <div>
        <Error />
      </div>
    )
  } else {
    return (
      <>
        <Intro />
        <Filters selectedCategory={selectedCategory} categoryChange={categoryChange}/>
        <div className="container">
          <div className='col-12'>
              <div className='row'>
                {filteredProducts.map(product => 
                  <ProductItem key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
                )}
              </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default ProductsPage;
