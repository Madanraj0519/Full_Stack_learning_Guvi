import React, { useEffect, useContext, useState } from 'react'
import { bookApi } from '../../Api/bookApi'
import { CartContext } from '../../Context/ContextApi';
import Product from '../../Components/Product';
import Loading from '../../Components/Loading';

const Home = () => {

  const [products, setProducts] = useState([]);

  const {cartItems} = useContext(CartContext);

  useEffect(() => {
   async function fetchApi() {
     try{
      const response = await fetch(bookApi);
      const data = await response.json();
      setProducts(data);
     }catch(err){
      console.error(`Error occurred fetching : ${err.message}`);
     
     }
   }
   fetchApi();
  },[]);


  // console.log(cartItems);

  return (
    <section className='container'>
      <div className='container-fluid col-12 col-md-10 mt-5'>
        <Product products={products.items} />
      </div>
    </section>
  )
}

export default Home