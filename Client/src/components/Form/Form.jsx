import React, { useState } from 'react';
import styled from "../Form/Form.module.css";
import { validations } from './validations';



export const Form = ({login}) => {

    let inicialState = { username: '', password: '' };

    const [userData, setUserData] = useState(inicialState);

    const [errors, setErrors] = useState({})

    const handleInputChange = (event) => {
        let {name,value} = event.target;
        setUserData({...userData,[name]:value})
        setErrors(validations({...userData,[name]:value}))
    };
    
    const handleSubmit = (event) => {
      event.preventDefault()
      if(Object.values(errors).length === 0){
        login(userData)
        setErrors(inicialState)
       
      }else{
        window.alert("Debe llenar todos los campos")
      }
        
    }

  return (
    <div className={styled.container}>
    <form className={styled.form} onSubmit={handleSubmit}>
        <h2>Iniciar Sesion</h2>
        <label htmlFor="">Username</label>
        <input type="text" name="username" value={userData.username} onChange={handleInputChange} className={errors.username && styled.username}/>
        <p>{errors.username}</p>
        <label htmlFor="">Password</label>
        <input type="text" name="password" value={userData.password}onChange={handleInputChange} className={errors.password && styled.password}/>
        <p>{errors.password}</p>
        <button>Login</button>
    </form>
    </div>
  )
};
