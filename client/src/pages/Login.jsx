import React, { useState } from 'react'
import f1 from '../assets/google.png';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Login() {

  const[data, setData] = useState({
    email:"",
    password:"",
  })
  const loginUser = (e) =>{
    e.preventDefault()
  }

  
  return (
    <div className="log">
      <div className="log-box">
          <h1>Login With</h1>
          <button><img src={f1}></img></button>
        <h1>or</h1>
        <form className='log-form' onSubmit={loginUser}>
            <label>Email</label>
            <input type = "email" placeholder='Enter Email' value = {data.email} onChange={(e)=> setData({...data, email:e.target.value})}/>
            <label>Password</label>
            <input type = "password" placeholder='Enter Password' value = {data.password} onChange={(e)=> setData({...data, password:e.target.value})}/>
            <button type='submit'>Login</button>
            <p>Don't Have Account? <Link to = "/register">Register</Link></p>
        </form>

        </div>
      </div>
  )
}
