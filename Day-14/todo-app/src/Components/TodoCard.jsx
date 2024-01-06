import React, { useState } from 'react';

const TodoCard = ({ todo, deleteTodo, updateStatus, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editedTask, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className='col'>
      <div className="card mb-3 rounded-2" style={{backgroundColor:'rgba(78, 195, 78, 0.548)'}}>
      <div className="card-body">
        {isEditing ? (
          <>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="editedTask"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="editedDescription"
                rows="3"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-success me-2" onClick={handleSave}>
              Update
            </button>
          </>
        ) : (
          <>
            <h6 className="card-title">Name : {todo.task}</h6>
            <p className="card-text">Description : {todo.description}</p>
            <p className="card-text d-flex align-item-center gap-5">
              Status:
              <select
                className={`form-select w-50 text-white rounded-0 ${todo.status === 'not completed' ? 'bg-danger' : 'bg-success'}`}
                value={todo.status}
                onChange={(e) => updateStatus(todo.id, e.target.value)}
              >
                <option value="completed" >Completed</option>
                <option value="not completed">Not Completed</option>
              </select>
            </p>
            <button
              className="btn btn-danger text-white me-2"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button className="btn btn-success text-white" onClick={handleEdit}>
              Edit
            </button>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default TodoCard;
