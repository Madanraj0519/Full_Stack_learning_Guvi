import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import Todofilter from './components/Todofilter';


function App() {

  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [filter, setFilter] = useState('all');

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id))
  }

  console.log(filter);
  return (
    <>
      <div className='container'>
        <h4 className='text-info'>My Todo</h4>
        <div className='container-fluid col-12 col-md-10 mt-5'>

          <TodoForm
          todo={todo} 
          setTodo={setTodo} 
          setEditTodo={setEditTodo} 
          editTodo={editTodo} />

          <Todofilter
          setFilter={setFilter}
           />


          <TodoCard 
          filter={filter}
          todo={todo} 
          setTodo={setTodo} 
          deleteTodo={deleteTodo}  
          setEditTodo={setEditTodo} />

        </div>
      </div>
    </>
  )
}

export default App
