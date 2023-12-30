import {useState, React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BannerImage from './components/BannerImage';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import {data} from "./data";
import './App.css'

function App() {
 
  const [count, setCount] = useState(0);

  return (
    <> 
      {/* passing the count state as a props to their child component  */}
      <Navbar count={count} />
      <BannerImage /> 
      {/* passing data, count, setCount as a props to the product card child component */}
      <ProductCard data={data} count={count} setCount={setCount} />  
      <Footer />
    </>
  )
}

export default App