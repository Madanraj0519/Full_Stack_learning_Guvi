// UserCrud.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CrudForm from './CrudForm';
import CrudList from './CrudList';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCrud = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchApi();
  },[]);

  const fetchApi = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data);
  }

  const addUser = async(newUser) => {
    try{
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      setUsers([...users,response.data]);
      // fetchApi();
    }catch(err){
      console.error('Error Adding user:', err);
    }
  }

  const updateUser = async (id, newUser) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newUser);
      const updatedUsers = users.map((user) => (user.id === id ? response.data : user));
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id, name) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const filteredUsers = users.filter((user) => user.id !== id);
      confirm(`Are you sure you want to delete ${name} Profile ?`);
      if(confirm){
        setUsers(filteredUsers);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // console.log(users);

  return (
    <div className='container'>
       <div className='container-fluid col-12 col-md-10 mt-5'>
         <h1 className='text-center mb-5'>Axios - Crud </h1>
         <CrudForm 
         addUser={addUser}
         users={users} />
         <h4>Users list :-</h4>
         <CrudList 
         users={users}
         deleteUser={deleteUser}
         updateUsers={updateUser} />
       </div>
    </div>
  );
};

export default UserCrud;
