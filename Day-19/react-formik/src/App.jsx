import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Products from './Components/products';

import './App.css'

function App() {

  return (
    <>
   <div className='d-flex' style={{height:'100%'}}>
   <Sidebar/>
      <div className='' style={{width:'100%'}}>
      <Navbar/>
      <Products />
      </div>
   </div>
    
   
    </>
  )
}

export default App