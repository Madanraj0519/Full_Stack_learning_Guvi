import React, { useEffect, useState } from 'react'

const TodoForm = ({todo, setTodo, setEditTodo, editTodo}) => {
    
    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');

    const onUpdate = (names, descriptions, ids, statuses) => {
        const newTodo = todo.map((todo) => {
          todo.id === ids ? {names, descriptions, ids, statuses}: todo;
        });
        const updateTodo = [...todo, newTodo]
        setTodo(updateTodo);
        setEditTodo('');
        console.log(newTodo);
      }


      useEffect(() => {
        if(editTodo){
        setUserName(editTodo.name);
        setDescription(editTodo.description);
        }
      }, [setUserName, setDescription, editTodo]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const dateString = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
        const uniqueId = dateString + '-' + random;

      if(!editTodo){
        setTodo([...todo, {
          id: uniqueId,
          name : userName,
          description : description,
          status : 'Incomplete'
        }])
        setDescription('');
        setUserName('');
      }else{
        onUpdate(editTodo.name, editTodo.description, editTodo.id, editTodo.status);
      }
    }


  return (
    <form class="row" onSubmit={handleSubmit}>
    <div class="col">
      <input 
       type="text"
       class="form-control border-2 border-info"
       placeholder="Enter your name"
       value={userName}
       onChange={(e) => setUserName(e.target.value)}
       aria-label="First name"/>
    </div>

    <div class="col">
      <input 
      type="text" 
      class="form-control border-2 border-info" 
      placeholder="Description" 
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      aria-label="Last name"/>
    </div>

    <div className='col'>
        <button className='btn btn-success w-100'>ADD</button>
    </div>

  </form>
  )
}

export default TodoForm