import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { BsArrowRight } from "react-icons/bs";
import { signUp } from "../services/auth.services";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import FormInput from "./FormInput";
import { valuesInputs } from "../utils/helpers";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMess, setErrorMess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(values.email, values.password);
      Swal.fire({
        icon: "success",
        title: "The user is registered",
        showConfirmButton: false,
        timer: 2000,
      });
      await setDoc(doc(db, "users", values.email), {
        savedShows: [],
      });
    } catch (error) {
      console.log(error);
      if (error.message.includes("email-already-in-use")) {
        setErrorMess("Email already in use");
      }
      navigate("/");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="background-section">
      <div className="signup-form">
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {valuesInputs(values).map((input) => {
              return (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              );
            })}
          </div>
          {errorMess && <div className="error-message">{errorMess}</div>}
          <button className="btn" type="submit">
            SIGN UP
          </button>
          <div>
            <p className="paragraph">
              Already have an account?{" "}
              <Link to="/login" className="links">
                Login
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
