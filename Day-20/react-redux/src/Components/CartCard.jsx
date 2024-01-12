import React from 'react'
import { deleteFromCart, incrementQuantity, decrementQuantity } from '../Redux/Reducers/Cart'
import {useDispatch } from 'react-redux'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CartCard = ({cartItem}) => {

    const dispatch = useDispatch();

    const handleDeleteCart = (id) => {
        dispatch(deleteFromCart(id));
    }

  return (
    <>
<div class="card mb-3" style={{maxWidth:"570px", maxHeight:"200px"}} key={cartItem.id}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={cartItem.image} class="img-fluid rounded-start" style={{maxHeight:"130px"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h6 class="card-title">{cartItem.title}</h6>
        <div className='d-flex justify-content-between'>
         <p class="card-text mt-2">{cartItem.category}</p>
         <div className='d-flex gap-2 align-items-center'>
            <p className='border border-2 bg-black p-1 text-white rounded-2'>{cartItem.quantity}</p>
            <p className='d-flew row'>
                <IoIosArrowUp onClick={() => dispatch(incrementQuantity(cartItem.id))} />
                <IoIosArrowDown onClick={() => dispatch(decrementQuantity(cartItem.id))}  />
            </p>
        </div>
         <p class="card-text mt-2">$ {cartItem.price * cartItem.quantity}</p>
        </div>
        <div className='-mt-4 d-flex justify-content-end'>
          <MdDelete className='text-danger fs-1' style={{cursor:"pointer"}} onClick={() => handleDeleteCart(cartItem.id)}/>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CartCard