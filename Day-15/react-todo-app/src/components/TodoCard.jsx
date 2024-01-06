import React from 'react';
import '../App.css'

const TodoCard = ({todo, deleteTodo, setTodo, setEditTodo, filter}) => {

  const handleStatusChange = (value, id) => {
    setTodo(
      todo.map((item) => {
        if(item.id === id){
          return {...item, status : value};
        }
        return item;
      })
    )
  }

  const handleEdit = (id) => {
    const findTodo = todo.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
      {  
        todo.map((todos) => (
          <div class="col" >
          {
            todos && (
              <div className='card h-100' style={{backgroundColor:'rgba(78, 195, 78, 0.548)'}} key={todos.id} >
              <div class="card-body">
               <h5 class="card-title text-start">Name : {todos.name}</h5>
               <p class="card-text text-start fw-nrmal">Description : {todos.description}</p>
               <div className='mt-4 d-flex gap-2 justify-content-start align-items-center'>
                 <label htmlFor={`statusDropdown-${todos.id}`}>Status: </label>
                 <select
                 className={`form-control text-white ${todos.status === 'Incomplete' ? 'bg-danger' : 'bg-success'} px-4`}
                 id={`statusDropdown-${todos.id}`}
                 value={todos.status}
                 onChange={(e) => handleStatusChange(e.target.value, todos.id)}
                 >
                 <option value="Incomplete" className='bg-danger'>Incomplete</option>
                 <option value="Complete" className='bg-success'>Complete</option>
                 </select>
               </div>
   
             <div className='d-flex justify-content-end col gap-5 mt-4'>
               <button href="#" class="btn btn-success  w-100" onClick={() => handleEdit(todos.id)}>Edit</button>
               <button href="#" class="btn btn-danger w-100" onClick={() => deleteTodo(todos.id)}>Delete</button>
             </div>
             </div>
              </div>
            )
          } 
          </div>
      ))
      }
   </div>
  )
}

export default TodoCard