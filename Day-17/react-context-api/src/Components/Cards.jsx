import React from 'react';
import { useContext } from 'react';
import {CartContext} from '../Context/ContextApi'



const Cards = ({product}) => {

  const {addCarts, cartItems} = useContext(CartContext);

  const handleAddToCart = (product, id) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (!isProductInCart) {
      addCarts(product);
    } else {
      alert('Product is already in the cart');
    }
  };
    
  return (
    <div class="col" key={product.id}>
    <div class="card h-100 card-ground">
      <img src={product.volumeInfo.imageLinks.smallThumbnail} class="card-img-top h-50" alt="..."/>
      <div class="card-body h-50 ">
        <h5 class="card-title font-style ">{product.volumeInfo.title}</h5>
        <p className='card-text fw-semibold font-style'>Author : {product.volumeInfo.authors[0]}</p>
        <p className='card-text fw-semibold font-style'>Published on : {product.volumeInfo.publishedDate}</p>
        <p className='card-text font-style'>Price : ${(product.volumeInfo.pageCount)/10}</p>
      </div>
      <button className="btn btn-dark button text-white font-style" onClick={() => handleAddToCart(product, product.id)}>
          Add to cart
       </button>
    </div>
   </div>
  )
}

export default Cards