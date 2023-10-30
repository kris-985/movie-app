import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css';
import {BsArrowRight, BsPass} from 'react-icons/bs';
import { UserAuth } from '../context/AuthContext';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const {signUp} = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email,password)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='signup-form'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for="name"><b>Name</b></label>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name..." name="name" id="name" required />
        </div>
        <div className='form-group'>
          <label for="email"><b>Email</b></label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email..." name="email" id="email" required />
        </div>
        <div className='form-group'>
          <label for="email"><b>Phone number</b></label>
          <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter Phone..." name="phone" id="phone" required />
        </div>
        <div className='form-group'>
          <label for="psw"><b>Password</b></label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password..." name="psw" id="psw" required />
        </div>
      
        <button  className="btn" type="submit">Register</button>
        
        <div>
          <p className='paragraph'>Already have an account? <Link to="/login" className='links'>Login<span><BsArrowRight/></span>
          </Link></p>
        </div>
      </form >
    </div >
  );
};

export default SignUp;