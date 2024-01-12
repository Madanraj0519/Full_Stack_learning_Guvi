import React from 'react'
import CrudCard from './CrudCard'

const CrudList = ({users, deleteUser, updateUsers}) => {
  return (
    <div className='row row-cols-1 d-flex justify-content-center row-cols-md-3 gap-4 mt-3'>
        {
            users && users.map((user) => (
                <CrudCard 
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                updateUsers={updateUsers} 
                /> 
            ))
        }
    </div>
  )
}

export default CrudList