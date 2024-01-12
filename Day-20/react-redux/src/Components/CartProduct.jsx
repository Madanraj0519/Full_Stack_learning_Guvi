import React from 'react'
import {useSelector} from 'react-redux';
import CartCard from './CartCard';
import CartSummary from './CartSummary';

const CartProduct = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <div class="offcanvas offcanvas-end" style={{width: "600px"}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
         <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Cart Items</h5>
         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div class="offcanvas-body">
             {
                cartItems && 
                cartItems.map((cartItem) => (
                    <CartCard cartItem={cartItem} />
                ))
             }
             {
              cartItems.length > 0 ? (
                <CartSummary cartItems={cartItems}/>
              ):(
                <div className='mt-3 p-4 text-center d-flex justify-content-center'>
                   <h4 className='font'>Oops ! Your cart is Empty, Go And fetch your order 👈</h4>
                </div>
              )
             }
         </div>
       </div>
    </div>
  )
}

export default CartProduct