import React, { useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { SiSemanticweb } from "react-icons/si";
import { SiWebtrees } from "react-icons/si";

const CrudCard = ({user, deleteUser, updateUsers}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [updateUser, setUpdateUser] = useState({
        name : user.name,
        username : user.username,
        email : user.email,
        phone : user.phone,
        company : {
            name : user.company.name
        },
        website : user.website
    });


    const handleUpdateUser = (id) => {
        updateUsers(id, updateUser);
        setIsSelected(!isSelected);
    }
    
  return (
    <div class="card" style={{width:'20rem'}} key={user.id}>
       <div class="card-body">
        {
            isSelected ? (
                <div class="mb-3 row gap-2">
                   <input type="text" id="inputPassword5" value={updateUser.name} onChange={(e) =>setUpdateUser( {...updateUser, name: e.target.value})}  placeholder='Change Name' class="form-control" aria-describedby="passwordHelpBlock"/>
                   <input type="text" id="inputPassword5" value={updateUser.username} onChange={(e) =>setUpdateUser( {...updateUser, username: e.target.value})}  placeholder='Change UserName'  class="form-control" aria-describedby="passwordHelpBlock"/>
               </div>
            ) : (
                <div className='d-flex row gap-2'>
                <h5 class="card-title d-flex gap-2 justify-content-center align-items-center"><FaRegCircleUser className='fs-3 text-primary' />{user.name}</h5>
                <p class="card-text fw-medium d-flex gap-2 justify-content-center align-items-center">{user.username}</p>
                </div>
            )
        }
       </div>
      <ul class="list-group list-group-flush">
       {
        isSelected ? (
            <>
            <li class="list-group-item">
               <input type="text" id="inputPassword5"  value={updateUser.email} onChange={(e) =>setUpdateUser( {...updateUser, email: e.target.value})}  placeholder='Change email'  class="form-control" aria-describedby="passwordHelpBlock"/>
            </li>
            <li class="list-group-item">
               <input type="text" id="inputPassword5" value={updateUser.phone} onChange={(e) =>setUpdateUser( {...updateUser, phone: e.target.value})}  placeholder='Change Phone number'  class="form-control" aria-describedby="passwordHelpBlock"/>
            </li>
            <li class="list-group-item">
               <input type="text" id="inputPassword5" value={updateUser.company.name} onChange={(e) =>setUpdateUser( {...updateUser, company : { name : e.target.value}})}   placeholder='Change Company'  class="form-control" aria-describedby="passwordHelpBlock"/>
            </li>
            <li class="list-group-item">
               <input type="text" id="inputPassword5" value={updateUser.website} onChange={(e) =>setUpdateUser( {...updateUser, website: e.target.value})}  placeholder='Change Website'  class="form-control" aria-describedby="passwordHelpBlock"/>
            </li>
            </>
        ) : (
            <>
            <li class="list-group-item d-flex gap-2 justify-content-center align-items-center"><IoIosMail className='fs-5 text-success'/>{user.email}</li>
            <li class="list-group-item d-flex gap-2 justify-content-center align-items-center"><FaPhoneAlt className='fs-6 text-success'/>{user.phone}</li>
            <li class="list-group-item d-flex gap-2 justify-content-center align-items-center"><SiSemanticweb className='fs-6 text-success'/>{user.company.name}</li>
            <li class="list-group-item d-flex gap-2 justify-content-center align-items-center"><SiWebtrees className='fs-6 text-success'/>{user.website}</li>
            </>
        )
       }
      </ul>
      <div className='p-4 text-center'>
       {
        isSelected ?
        (
            <>
               <button  class="card-link btn btn-success px-4" onClick={() => handleUpdateUser(user.id)}>Update</button>
               <button  class="card-link btn btn-danger" onClick={() => setIsSelected(!isSelected)}>Cancel</button>
            </>
        )
        :
        (
            <>
            <button  class="card-link btn btn-success px-4" onClick={() => setIsSelected(!isSelected)}>Edit</button>
            <button  class="card-link btn btn-danger" onClick={() => deleteUser(user.id, user.name)}>Delete</button>
            </>
        )
       }
      </div>
     </div>
  )
}

export default CrudCard