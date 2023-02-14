import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleCLickEdit = () =>{
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className='userCard__container' key={user.id}>
              <h3 className='userCard__name'>{user.first_name} {user.last_name}</h3>
             
              <ul className='userCard__list'>
                <li className='userCard__item'><span>Email: </span>{user.email}</li>
                <li className='userCard__item'><span>Birthday: </span><i className='bx bx-gift'></i>{user.birthday}</li>
              </ul>
              
              <footer className='userCard__footer'>
                <button className='userCard__btn-delete' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
                <button className='userCard__btn-edit' onClick={handleCLickEdit}><i className='bx bx-pencil'></i></button>
              </footer>
              <hr />
            </article>
  )
}

export default UserCard