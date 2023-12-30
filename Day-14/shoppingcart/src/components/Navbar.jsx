import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({count}) => {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary px-5">
  <div class="container-fluid px-5 py-2">
    <a class="navbar-brand" href="#">Start Shopping</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex gap-3">
          <button class="btn btn-outline-dark" type="submit">
            <FaShoppingCart/>
              Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
          </button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar