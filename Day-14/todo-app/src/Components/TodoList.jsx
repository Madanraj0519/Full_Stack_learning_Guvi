import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, deleteTodo, updateStatus, editTodo }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateStatus={updateStatus}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
