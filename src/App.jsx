import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ModalForm from './Components/ModalForm'
import NavBar from './Components/NavBar'
import UserList from './Components/UserList'

const URL_BASE = "https://users-crud.academlo.tech/"



function App() {
  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
  }

  const createUser = (data) => {
    axios
      .post(`${URL_BASE}users/`, data)
      .then(() => {
        getAllUser()
        handleClickShowModal()
      })
      .catch((err) => console.log(err));
  }

  const getAllUser = () => {
    axios.get(`${URL_BASE}user/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios
    .delete(`${URL_BASE}user/${id}/`)
    .then (() => getAllUser())
    .catch((err) => console.log(err))
  }

  const updateUser = (data, id) => {
    axios.patch(`${URL_BASE}user/${id}/`, data)
    .then (() => {
      getAllUser()
      handleClickShowModal()
    
    })
    .catch((err) => console.log(err))
  }


  useEffect(() => {
    getAllUser()
  }, [])

  return (
    <div className="App">
      <NavBar handleClickShowModal={handleClickShowModal}/>
  
      <ModalForm isShowModal={isShowModal}
       handleClickShowModal={handleClickShowModal}
       createUser={createUser}
       updatingUser={updatingUser}
       updateUser={updateUser}
       setUpdatingUser={setUpdatingUser}/>

      <UserList deleteUser={deleteUser} 
      users={users} 
      setUpdatingUser={setUpdatingUser}
      handleClickShowModal={handleClickShowModal} />
    </div>
  )
}

export default App
