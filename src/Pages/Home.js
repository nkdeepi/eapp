
import React from 'react'
import {Carousel} from 'react-bootstrap'
import './style.css'
import logo from '../images/halfprice.jpg'
import logoone from '../images/ladykurtha.jpg'
import logotwo from '../images/men.jpg'



function Home() {
  return (
    <div className='carousel'>Home page
      <Carousel>
  <Carousel.Item>
    <img id='img1'
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>LOWER HAI PRICE</h3>
     <h4> Quality Mein No Compromise</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img id='img2'
    className='d-block w-400'
     
      src={logoone}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Queen Of Fashion</h3>
      <h4> kurtis& Kurtha Sets</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logotwo}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Men's Clothing</h3>
      <h4>Upto 50% OFF</h4>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Home