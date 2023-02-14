import React from 'react'
import './styles/NavBar.css'

const NavBar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar__'>
        <h1 className='navbar__title'>Users CRUD</h1>
        <button className='navbar__btn' onClick={handleClickShowModal}><i className='bx bx-cross'></i>Create new user</button>
    </nav>
  )
}

export default NavBar