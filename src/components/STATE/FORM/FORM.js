import React, { useState } from 'react'
import Style from './form.module.css';
function FORM() {
    const [user,setUser] = useState({name:'',email:'',password:''});
    const {name,email,password} = user;

    const inputChangeHandler =(e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    
    const fromHandler = (e) => {
     e.preventDefault();
     console.log(user);
    }
  return (
    <div>
        <h2>Registration form</h2>
        <form onSubmit={fromHandler}>
            <div className={Style.formGroup}>
                <label>Name</label>
                <input name='name' type='text'  id='name' value={name} required onChange={inputChangeHandler} />
            </div>
            <div className={Style.formGroup}>
                <label>Email</label>
                <input name='email' type='text'  id='email' value={email} required onChange={inputChangeHandler} />
            </div>
            <div className={Style.formGroup}>
                <label>Password</label>
                <input name='password' type='text'  id='password' value={password} required onChange={inputChangeHandler} />
            </div>
            <div className={Style.formGroup}>
                <button type='submit'>Submit</button>
            </div>
        </form>
        
    </div>
  )
}

export default FORM