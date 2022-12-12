import axios from 'axios'
import { useState } from 'react'

const useCrud = () => {
    const [users, setUsers] = useState()

    const getAllUsers=()=>{ // te da la configuracion de la base de datos y todo lo que se guardo ahi gracias al get 
        const URL=`https://users-crud.academlo.tech/users/`
        axios.get(URL)
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
      }
    
      const createNewUser= (data) =>{ // creas un nuevo usuario
       const URL = `https://users-crud.academlo.tech/users/`
       axios.post(URL,data)
        .then(() => getAllUsers()) // con el setuser solo se mostraria lo que dice en el user, con el getallusers es para guardarlo dentro de la base de datos
        .catch(err=>console.log(err))
    
      }
    
      const deleteUserById=(id)=>{
       const URL=`https://users-crud.academlo.tech/users/${id}/` 
        axios.delete(URL)   // No se pone URL,id porque el id ya esta en la URL misma
        .then(()=>getAllUsers())
        .catch(err=>console.log(err))
    }
      const updateUserById=(id,data)=>{
        const URL=`https://users-crud.academlo.tech/users/${id}/` 
        axios.put(URL,data)
        .then(()=>getAllUsers())
        .catch(err=>console.log(err))
      }
      return {users,createNewUser,getAllUsers,deleteUserById,updateUserById}
}

export default useCrud