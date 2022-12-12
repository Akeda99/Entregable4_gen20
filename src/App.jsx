import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

const [closeform, setCloseform] = useState(true)
const [notice, setNotice] = useState(false)
 
  const {users,getAllUsers,createNewUser,deleteUserById,updateUserById}= useCrud()
  const [updateinfo, setUpdateinfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])

  

  return (
    <div className="App">
     <h1>Users</h1>
     <button onClick={()=>setCloseform(false)} className='App_btn'>Open Form</button>
     <div className={`form-container ${closeform && 'close_form'}`}>
     <FormUser 
     createNewUser={createNewUser}
     updateinfo={updateinfo}
     updateUserById={updateUserById}
     setUpdateinfo={setUpdateinfo}
     setCloseform={setCloseform}
     />
     </div>

     <div className="user_container">
      {
        users?.map(user=>(
          <UserCard 
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateinfo={setUpdateinfo}
          setCloseform={setCloseform}
          />
        ))
      }
     </div>
    </div>
  )
}

export default App
