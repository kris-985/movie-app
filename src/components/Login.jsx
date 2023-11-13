import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import {BsArrowRight} from 'react-icons/bs';
import { logIn } from './services/auth.services';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email,password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='login-form'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='forms-group'>
          <label for="email"><b>Email</b></label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" name="email" id="email" required />
        </div>
        <div className='forms-group'>
          <label for="psw"><b>Password</b></label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" id="psw" required />
        </div>
        <button className='btn-one' type="submit">Login</button>
        <div>
          <p className='paragraph-one'>Create an account? <Link to="/signup" className='signup-two'>SignUp<span><BsArrowRight/></span>
          </Link></p>
        </div>
      </form>
    </div>

  )
}

export default Login