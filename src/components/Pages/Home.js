import React from 'react'
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <div className='container-fluid my-0 p-0 d-flex flex-column justify-content-center align-items-center' style={{background: '#333', height: '557px'}}>
        <div className='text-start m-5 text-light text-break'>
          <h1 style={{textAlign: 'center'}}>The NeStore</h1> 
          <h4>
            Welcome to the Nestore online store written in React JS/Redux
          </h4>
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Home;
