import React from 'react'
import f1 from '../assets/google.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Register() {
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="log">
      <div className="log-box">
          <h1>Register</h1>
          <button><img src={f1}></img></button>
        <h1>or</h1>
        <form className='log-form' onSubmit={registerUser}>
            <label>Name</label>
            <input type = "text" placeholder='Enter Name' value = {data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
            <label>Email</label>
            <input type = "email" placeholder='Enter Email'value = {data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
            <label>Password</label>
            <input type = "password" placeholder='Enter Password' value = {data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
            <button type='submit'>Register</button>
            <p>Already Have Account? <Link to = "/login">Login</Link></p>
        </form>

        </div>
      </div>
  )
}
