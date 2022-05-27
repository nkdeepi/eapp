import React, { useEffect, useState } from 'react';
import "./category.css";
import {Button,Dropdown} from 'react-bootstrap';
import { width } from '@mui/system';
import {FaShoppingCart} from 'react-icons/fa'

const Category = () => {
  const[scart, setScart]=useState([]);
  const[fake,setFake]=useState([]);
  // console.log("FAKE DATA",fake);
  useEffect(()=>{
    // console.log("logged");
    fakestore();

  },[])
  // creating function(addCart) for adding items to cart
  const addCart=(values)=>{
    setScart([...scart,values]);
    // alert(values.title)
  //  console.log(scart)
  };
  const cartItems = scart.map((values) => (
    <div key={values.id}>
      {`${values.id}: $${values.price}`}
      <input type="submit" value="remove"  />
    </div>
  ));
  
  // creating function for fetching data from fake api
  const fakestore=async()=>{
  
    const response= await fetch('https://fakestoreapi.com/products');
    // console.log("RESPONSE",response);
    const jd= await response.json();
    // console.log("OBJECTDATA",jd);
    setFake(jd);

  }


 

  
  return (
    <>
    <div className='container-fluid mx-2'>
      <h2 className='text-center'>All Products</h2>
      <div className='row mt-5 mx-2'>
      
        <div className='col-md-10'>
          <div className='row'>
            <div className='col-md-10'>
            <div className='containerone'>
            {fake.map((values)=>{
              return( <>
                <div className='box'>
                  <div className='content'>
                    {/* <p>{values.description}</p> */}
                  </div>
                  <img src={values.image} alt=""/>
                  <h5>{values.title}</h5>
                  <div className='buttons'>
                  <a  className='btn btn-ouline-dark ms-2 mt-5 ' onClick={()=>addCart(values)}>Add To Cart</a>
        {/* <a href="" className='btn btn-ouline-dark ms-2 mt-5 '>Buy Now</a>  */}
        
                  </div>
                </div>
                </>
  )
             
            })}
            </div>
              
            </div>
          </div>
        </div>
        <div className='col-md-2'>
          <h5>Cart Items</h5>
          <div id='cartboxitems' className="box">
            <div className='content'>
           
              


        {cartItems}
            </div>
          </div>
        </div>
      </div>
    
      
    </div>
    
    </>
   )
   }

 export default Category;
    {/* {/* <div className='scart'>
      
   {cartItems}
    
    </div> */}
