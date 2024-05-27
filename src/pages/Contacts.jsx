import React from "react";
import { MdOutlineMailLock } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsPhoneVibrate } from "react-icons/bs";
import styled from "styled-components";

const Contacts = () => {

  return (
    <ChatSection>
      <MainTitle>LET'S CHAT!</MainTitle>
      <SubTitle>
        We would like to learn what is your opinion for our project!
      </SubTitle>
      <ImageContainer>
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvb2dsZSUyMG1hcCUyMGxvY2F0ZWQlMjB1bml0ZWQlMjBraW5nZG9tfGVufDB8fDB8fHww"
          alt="Google Map Location"
        />
      </ImageContainer>
      <Icons>
        <Icon>
          <span>
            <BsPhoneVibrate />
          </span>
          <p>847-868-8777</p>
        </Icon>
        <Icon>
          <span>
            <MdLocationOn />
          </span>
          <p>27-1 Stanley Gardens, London, United Kingdom</p>
        </Icon>
        <Icon>
          <span>
            <MdOutlineMailLock />
          </span>
          <p>hello@movie-app.com</p>
        </Icon>
      </Icons>
    </ChatSection>
  );
};

export default Contacts;

const ChatSection = styled.div`
  padding: 20px;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: #80395a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 2rem;
  color: #555;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Icons = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 3rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    margin-top: 20px;
    width: 100%;
    max-width: 700px;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;
