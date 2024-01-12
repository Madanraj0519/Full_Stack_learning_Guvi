import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdAddCircle } from "react-icons/io";

const CrudForm = ({addUser, users}) => {

    const [newUser, setNewUser] = useState({
        name :'',
        username : '',
        email : '',
        phone : '',
        website:'',
        company: {
          name: '',
        }
    });

   const handleAddUser = () => {
      setNewUser((prevUsers) => (
        {
          ...prevUsers,
          id : users.length + 1,
        }
      ))
      if(newUser.name.trim() !==''){
        addUser(newUser);
        alert('New user added');
      }
      setNewUser({
        name :'',
        username : '',
        email : '',
        phone : '',
        website:'',
        company: {
          name: '',
        }
      })
   }


  return (
 <div class="row g-3">
  <div class="col-md-4">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="email" class="form-control" name='name' placeholder='Ex: John' value={newUser.name} onChange={(e) => setNewUser({...newUser, name : e.target.value})} id="inputEmail4"/>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">User Name</label>
    <input type="text" class="form-control" name='username' placeholder='Ex: Johnny' value={newUser.username} id="inputPassword4" onChange={(e) => setNewUser({...newUser, username : e.target.value})} />
  </div>
  <div class="col-md-4">
    <label for="inputAddress" class="form-label">E mail</label>
    <input type="text" class="form-control" id="inputAddress" name='email' value={newUser.email} placeholder="Ex : axios@gmail" onChange={(e) => setNewUser({...newUser, email : e.target.value})} />
  </div>
  <div class="col-md-4">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder='Ex: 123456789'  name='phone' value={newUser.phone} onChange={(e) => setNewUser({...newUser, phone : e.target.value})} />
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Website</label>
    <input type="text" class="form-control" name='website' placeholder='www.hotlook.com' value={newUser.website} onChange={(e) => setNewUser({...newUser, website : e.target.value})} id="inputZip"/>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Company</label>
    <input type="text" class="form-control" name='name' placeholder='Ex: Guvi' value={newUser.company.name} onChange={(e) => setNewUser({...newUser, company : { name : e.target.value }})}  id="inputZip"/>
  </div>
  <div class="col-12 text-end">
    <IoMdAddCircle className='fs-1' style={{cursor:"pointer", color:"#EBE3D5", width:"3rem", height:"3rem"}} onClick={handleAddUser} />
  </div>
</div>
  )
}

export default CrudForm