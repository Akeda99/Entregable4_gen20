import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({createNewUser,updateinfo,updateUserById,setUpdateinfo,setCloseform}) => {

    console.log(updateinfo);

    useEffect(() => {
    reset(updateinfo)
    }, [updateinfo])// el chismoso es el que hace que se vea en el form el dato que queremos updatear
    

    const {register,reset,handleSubmit }= useForm()

    const submit = (data) =>{ // data sin siquiera importarlo de app interesante y sin importar nada de app hasta el momento pero no lo guarda la info
        if(updateinfo){ // si updateinfo tiene informacion adentro esto se actualizara con el info
            updateUserById(updateinfo.id,data)
            setUpdateinfo()
        }else{ // sino voy a crear informacion osea el form estara para crear
            createNewUser(data)
        }
        
        setCloseform(true)
        reset({
            email:"",
            password:"",
            first_name:"",
            last_name:"",
            birthday:""

        })
    }
  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <div onClick={()=>setCloseform(true)} className='form_x'>x</div>
   <h2 className='form_title'>{updateinfo ? 'Update User' : 'Create User'}</h2>
   <div className='form_div'>
    <label className='form_label' htmlFor="email">Email: </label>
    <input className='form_input' type="email" id="email" {...register("email")}/>
    </div>
    <div className='form_div'>
    <label className='form_label' htmlFor="password">Password: </label>
    <input className='form_input' type="password" id="password" {...register("password")}/>
    </div>
    <div className='form_div'>
    <label className='form_label' htmlFor="first_name">First name: </label>
    <input className='form_input' type="text" id="first_name"{...register("first_name")} />
    </div>
    <div className='form_div'>
    <label className='form_label' htmlFor="last_name">Last name: </label>
    <input className='form_input' type="text" id="last_name" {...register("last_name")}/>
    </div>
    <div className='form_div'>
    <label className='form_label' htmlFor="birthday">Birthday: </label>
    <input className='form_input' type="date" id="birthday" {...register("birthday")}/>
    </div>
    <button className='form_btn'>Submit</button>
    </form>
    
  )
}

export default FormUser