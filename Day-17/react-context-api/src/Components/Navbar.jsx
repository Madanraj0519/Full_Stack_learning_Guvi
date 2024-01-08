import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsFillCartFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from '../Context/ContextApi'

const Navbar = () => {

  const {cartItems} = useContext(CartContext);

  const count = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg p-3 mb-5 ">
    <div className="container-fluid  p-1">
      <a className="navbar-brand text-white" href="#">Book Start</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse text-start navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 ps-5 mb-lg-0">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active text-white" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul className="dropdown-menu text-start row col-md-11 col-sm-11" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">All Products</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Popular Items</a></li>
              <li><a className="dropdown-item" href="#">New Arrivals</a></li>
            </ul>
          </li>
        </ul>
        <Link to={'/cart'}>
        <form class="d-flex gap-2">
          <button class="btn btn-outline-white bg-white" type="submit">
            <BsFillCartFill />
              Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
          </button>
        </form>
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar