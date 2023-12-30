import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";


const ProductCard = ({data, count, setCount}) => {

  // set a data to the product state
  const [product, setProduct] = useState(data);

  // handling increment and decrement in the cart and also change the button 
  function  handleCount(type = '', productId){
    if(type === 'increment'){
      setCount(count + 1);
    }else{
      {count > 0 && setCount(count - 1)};
    }

    //handling the button through their product id
    setProduct((prev) => prev.map(product => 
      product.id === productId ? {...product, isProduct : !product.isProduct} : product));
  }
    
  return (
    <div className=''>
        <div className='container-fluid col-12 col-md-10 mt-5 mb-5'>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">  

               {/* returning all the items in the product state with the help of map method */}
                {
                    product.map((item) => (
                      <div class="col" key={item.id}>
                        <div class="card h-100">

                          <div className='position-relative'>
                              <img src={item.images[0]} class="card-img-top position-relative" alt="..."/>
                              { item.stock > 50  ? 
                              (<p className='position-absolute top-0 px-2 border border-light rounded-pill m-1 bg-success text-white fw-bolder'>Sale <SlBadge /></p>) :
                              (<p className='position-absolute top-0 px-2 border border-light rounded-pill m-1 bg-danger text-white fw-bolder'>Out of stock</p>)}
                          </div>

                          <div class="card-body">
                            <h5 class="card-title text-center">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                            <p className='card-text'>Cost : ${item.price}</p>
                            <p className='card-text'>Available : {item.stock > 50 ? item.stock : "Out of stock"}</p>
                            <p className='card-text d-flex align-items-center gap-1'>Rating : {item.rating}<FaStar className='text-warning'/></p>
                          </div>

                          {
                            !item.isProduct ? (<button  type="button" class="btn btn-dark mx-5 my-2" onClick={() => handleCount("increment", item.id)}>Add to cart</button>) :
                            (<button type="button" class="btn btn-dark mx-5 my-2" onClick={() => handleCount("decrement", item.id)}>Delete to cart</button>)
                          }

                        </div>
                      </div>
                    ))
                }   
        </div>
        </div>
    </div>
  )
}

export default ProductCard;