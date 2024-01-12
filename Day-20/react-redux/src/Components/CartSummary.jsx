import React from 'react'

const CartSummary = ({cartItems}) => {

    var randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

    const calculateAmount = (item) => {
      const amount = ((item.quantity * item.price))
      return amount
   }

   const calculateTotal = () => {
       return cartItems.reduce((total, item) => total + calculateAmount(item), 0);
   }

   const disCountTotal = () => {
    return calculateTotal() - randomNumber + 10;
   }

  return (
     <div>
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
   </div>
  )
}

export default CartSummary