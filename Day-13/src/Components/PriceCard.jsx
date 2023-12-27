import React from 'react';
import {data} from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaXmark } from "react-icons/fa6";
import { BsCheckLg } from "react-icons/bs";

const PriceCard = () => {
  return (
    <div class="container">
    <div class="container-fluid col-12 col-md-10 mt-5 bg-primary">
    <div class="row row-cols-1 row-cols-md-3 g-4">
     {
         data.map((item) => (
           <div class="col mb-3" key={item.id}>
           <div class="card front h-100 p-2">
            <div class="card-header bg-white">
               <h6 className="card-title text-center text-secondary text-uppercase">{item.subtitle}</h6>
               <h1 class="card-title text-center">{item.title}</h1>
             </div>
             <div class="card-body">
               {
                 item.plans.map((plans) =>(
                   <div className='d-flex flex-row align-items-center gap-3 px-2'>
                     {
                       plans.Symbol ? (
                         <p class="card-text text-center fs-5 text-body-secondary fw-bold"><BsCheckLg /></p>
                       ) :
                       (
                         <p class="card-text text-center opacity-50 text-body-secondary fw-bold"><FaXmark/></p>
                       )
                     }

                     <p class="card-text text-center mb-3">{plans.plan}</p>
                   </div>
                 ))
               }
             </div>
                <button class="btn btn-primary px-4 mx-4 mb-3 rounded-pill" type="submit">Button</button>
           </div>
       </div>
         ))
     }
   </div>
    </div>
  </div>
  )
}

export default PriceCard