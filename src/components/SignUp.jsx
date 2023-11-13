import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css';
import { BsArrowRight, } from 'react-icons/bs';
import { signUp } from './services/auth.services';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import FormInput from './FormInput';

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const[errorMess, setErrorMess]=useState("");

  console.log(values);
  const navigate = useNavigate()
  const inputs = [{
    id: 1,
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Should be a valid email adress",
    required: true

  }, {
    id: 2,
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password should be 8-20 characters and should include at least one letter, one number and one special character",
    required: true,
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
  }, {
    id: 3,
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Password don't match",
    required: true,
    pattern: values.password
  }]
  const handleSubmit = (e) => {
    e.preventDefault();
  try {
      signUp(values.email, values.password).then(() =>
        setDoc(doc(db, "users",values.email), {
          savedShows: [],
        }))
      navigate('/')
    } catch (error) {
      console.log(error);
      if (error.message.includes("email-already-in-use")) {
   setErrorMess('Email already in use')
      }
    }
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div className='signup-form'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
       
        <div className='form-group'>
        {inputs.map((input) => {
          return(
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange} />
        )})}
        </div>
  <div>{errorMess && errorMess}</div>
        <button className="btn" type="submit">Register</button>

        <div>
          <p className='paragraph'>Already have an account? <Link to="/login" className='links'>Login<span><BsArrowRight /></span>
          </Link></p>
        </div>
      </form >
    </div >
  );
};

export default SignUp;