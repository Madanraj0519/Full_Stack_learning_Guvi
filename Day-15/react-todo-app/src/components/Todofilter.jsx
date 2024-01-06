import React from 'react'

const Todofilter = () => {
  return (
    <div className='d-flex align-items-center justify-content-between mt-3'>
        <div>
            <h4>My Todo</h4>
        </div>
    <div className='mt-4 d-flex gap-2  justify-content-end align-items-center'>
    <label htmlFor={`statusDropdown-`}>Status Filter: </label>
    <select
    className={`form-control px-4`}
    id={`statusDropdown-`}
    >
    <option value='All'>All</option>
    <option value="Incomplete" className='bg-danger'>Incomplete</option>
    <option value="Complete" className='bg-success'>Complete</option>
    </select>
  </div>
    </div>
  )
}

export default Todofilter