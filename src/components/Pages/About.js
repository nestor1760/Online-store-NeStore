import React from 'react'
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
      <div className='container-fluid my-0 p-4 d-flex flex-column justify-content-start align-items-start' style={{background: '#333', height: '557px'}}>
        <div className='text-start text-light text-break'>
          <h1>The NeStore</h1>
          <p className='container text-break fs-5'>
            This project is based on the component approach of building the structure. Styles are written using inline styles, css modules and using bootstrap. Also in this project you can find navigation, a shopping cart, display of products as they are obtained from an array using a redux thunk, a modal window and other interesting things.<br />
            This project of the online store is written with the help of such technologies as:
          </p> 
          <ul style={{listStyle: 'none', fontSize: '20px'}}>
            <li style={{fontWeight: 700}}>React</li>
            <li style={{fontWeight: 700}}>Redux</li>
            <li style={{fontWeight: 700}}>Redux thunk</li>
            <li style={{fontWeight: 700}}>JavaScript</li>
            <li style={{fontWeight: 700}}>Bootstrap</li>
            <li style={{fontWeight: 700}}>CSS</li>
            <li style={{fontWeight: 700}}>HTML</li>
            <li style={{fontWeight: 700}}>React Router DOM</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;
