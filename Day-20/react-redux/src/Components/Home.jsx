import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Products from './Products';
import CartProduct from './CartProduct';

const Home = () => {

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        async function fetchApi() {
          try{
           const response = await fetch(`https://fakestoreapi.com/products`);
           const data = await response.json();
           setProducts(data);
          }catch(err){
           console.error(`Error occurred fetching : ${err.message}`);
          
          }
        }
        fetchApi();
       },[]);

  return (
   <section className='container'>
    <div className='container-fluid col-12 col-md-10 mt-5'>
      <Products products={products} />
      <CartProduct />
    </div>
   </section>
  )
}

export default Home