import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { logIn } from "../services/auth.services";
import styled from "styled-components";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      Swal.fire({
        icon: "success",
        title: "Logged in successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <BackgroundSection>
      <LoginForm>
        <Title>LOGIN</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">
              <b>Email</b>
            </Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="psw">
              <b>Password</b>
            </Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>
          <Paragraph>
            Create an account?
            <SignupLink to="/signup">
              SignUp
              <BsArrowRight />
            </SignupLink>
          </Paragraph>
        </form>
      </LoginForm>
    </BackgroundSection>
  );
};

export default Login;

const BackgroundSection = styled.section`
  position: relative;
  height: 100vh;
  background-image: url("https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/1242/images/r41aOV34SDOMvdBtV0x2_WhatsApp_Image_2020-09-30_at_10.55.50.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(249, 249, 249, 0.9);

  @media screen and (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #80395a;
`;
const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  color: #80395a;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #80395a;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e2b44;
  }
`;

const Paragraph = styled.p`
  margin-top: 15px;
  font-size: 16px;
  text-align: left;
`;

const SignupLink = styled(Link)`
  color: black;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
`;
