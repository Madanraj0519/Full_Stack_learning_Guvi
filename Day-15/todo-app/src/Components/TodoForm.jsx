import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddTodo = () => {
    if (newTask.trim() !== '') {
      addTodo({
        task: newTask,
        description: newDescription,
      });
      setNewTask('');
      setNewDescription('');
    }
  };

  return (
    <>
    <div className='row d-flex justify-content-between mt-5'>
      <div className="mb-3 col">
        <input
          type="text"
          className="form-control"
          id="task"
          value={newTask}
          placeholder='Enter your name'
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div className="mb-3 col">
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={newDescription}
          placeholder='Enter your Comments'
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
      </div>
      <div className='col'>
            <button className='btn btn-success w-100' onClick={handleAddTodo}>ADD Todo</button>
      </div>
    </div>
    </>
  );
};

export default TodoForm;
