import React from 'react'

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleCLickEdit = () =>{
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article key={user.id}>
              <h3>{user.first_name} {user.last_name}</h3>
              <hr />
              <ul>
                <li><span>Email: </span>{user.email}</li>
                <li><span>Birthday: </span><i className='bx bx-gift'></i>{user.birthday}</li>
              </ul>
              <hr />
              <footer>
                <button onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
                <button onClick={handleCLickEdit}><i className='bx bx-pencil'></i></button>
              </footer>
            </article>
  )
}

export default UserCard