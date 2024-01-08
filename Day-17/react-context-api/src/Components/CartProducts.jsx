import {useContext} from 'react'
import {CartContext} from "../Context/ContextApi"
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import { IoArrowUndo } from "react-icons/io5";

const CartProducts = () => {

    const {cartItems} = useContext(CartContext);

    var randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

    const calculateAmount = (item) => {
      const amount = ((item.quantity * item.volumeInfo.pageCount)/10)
      return amount
   }

   const calculateTotal = () => {
       return cartItems.reduce((total, item) => total + calculateAmount(item), 0);
   }

   const disCountTotal = () => {
    return calculateTotal() - randomNumber + 10;
   }

  return (
   <div className='d-flex col gap-3'>
      <div className='row g-3 mt-3'>
         <Link to={'/'} className='text-start'>
            <IoArrowUndo className='fs-3 text-white' />
         </Link>
        {
            cartItems && 
            cartItems.map((cartItem) =>(
                <CartCard cartItem={cartItem} />
            ))
        }
       </div>
       {
        cartItems.length > 0 ? (
        <div class="card h-100 mt-3" style={{style:"width: 18rem"}} key={cartItems.id}>
          <div class="card-body">
             <h5 class="card-title">Cart Summary</h5>
          </div>
          <ul class="list-group list-group-flush">
             <li class="list-group-item">Price : ${calculateTotal()}</li>
              <li class="list-group-item">Discount : ${randomNumber}</li>
             <li class="list-group-item">Total : ${disCountTotal()}</li>
           </ul>
        <div class="card-body">
              <button className='btn btn-success w-100'>Check out</button>
              <h4 class="card-text mt-5">You will save ${randomNumber} on this order</h4>
        </div>
    </div>
        ) : (
          <div className='mt-3 p-4 text-center d-flex justify-content-center'>
            <h4 className='text-white'>Oops ! Your cart is Empty, Go And fetch your order <Link to={'/'}>Home</Link> 👈</h4>
          </div>
        )
       }
   </div>
  )
}

export default CartProducts