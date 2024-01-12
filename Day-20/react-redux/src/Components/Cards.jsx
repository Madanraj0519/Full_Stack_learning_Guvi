import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../Redux/Reducers/Cart';
import { FaCartArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Cards = ({product}) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);


  const handleAddToCart = (product, id) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id) 
    if(!isProductInCart){
      dispatch(addToCart(product, id));
    }else{
      alert(`Product: ${product.title} is already in the cart`);
    }
  }

  // console.log(cartItems);

  return (
    <div class="col" key={product.id}>
    <div class="card h-100 card-ground" style={{maxHeight:"550px"}}>
      <p className='d-flex fs-6 gap-1 justify-content-end align-items-center'>{product.rating.rate} <FaStar className='text-warning fs-5 '/></p>
      <img src={product.image} className="card-img-top" style={{maxHeight:"200px"}} alt="..."/>
      <div class="card-body h-50 ">
        <h6 class="card-title font-style ">{product.title}</h6>
        <p className='card-text fw-semibold font-style text-capitalize'>{product.category}</p>
        <p className='card-text font-style'>Price : ${product.price}</p>
      </div>
      <div className='d-flex justify-content-end'>
         <FaCartArrowDown  className='text-success fs-1' style={{cursor:"pointer"}} onClick={() => handleAddToCart(product, product.id)}/>
      </div>
    </div>
   </div>
  )
}

export default Cards