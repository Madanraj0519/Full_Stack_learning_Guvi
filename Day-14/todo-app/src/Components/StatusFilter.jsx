import React from 'react';

const StatusFilter = ({ filterStatus, setFilterStatus }) => {
  return (
   <div className='d-flex align-items-center justify-content-between mt-3'>
     <div>
      <h4>My Todos</h4>
     </div>
     <div className="mt-4 d-flex gap-2  justify-content-end align-items-center">
      <label className="form-label">Status Filter:</label>
      <select
        className="form-select bg-warning rounded-0 text-white"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed" className='bg-success'>Completed</option>
        <option value="notCompleted" className='bg-danger'>Not Completed</option>
      </select>
    </div>
   </div>
  );
};

export default StatusFilter;
