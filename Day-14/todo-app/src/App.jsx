import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import TodoCard from './Components/TodoCard'
import StatusFilter from './Components/StatusFilter'

function App() {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const addTodo = (newTodo) => {
    const todo = {
      id: Date.now(),
      task: newTodo.task,
      description: newTodo.description,
      status: 'not completed',
    };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const editTodo = (id, editedTask, editedDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: editedTask,
              description: editedDescription,
            }
          : todo
      )
    );
  };

  const filterTodos = () => {
    switch (filterStatus) {
      case 'completed':
        return todos.filter((todo) => todo.status === 'completed');
      case 'notCompleted':
        return todos.filter((todo) => todo.status === 'not completed');
      default:
        return todos;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-info">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <StatusFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <TodoList
        todos={filterTodos()}
        deleteTodo={deleteTodo}
        updateStatus={updateStatus}
        editTodo={editTodo}
      />
    </div>
  )
}

export default App
