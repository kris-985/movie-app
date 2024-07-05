import { Link } from "react-router-dom";
import React from "react";
import { GiFilmProjector } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <LeftSection>
          <ul>
            <LeftSectionLink to="/">
              <li>HOME</li>
            </LeftSectionLink>
            <LeftSectionLink to="aboutus">
              <li>ABOUT US</li>
            </LeftSectionLink>
            <LeftSectionLink to="contacts">
              <li>CONTACTS</li>
            </LeftSectionLink>
            <LeftSectionLink to="favourites">
              <li>FAVOURITES</li>
            </LeftSectionLink>
          </ul>
        </LeftSection>
        <CenterSection>
          <h1>
            <span>
              <GiFilmProjector />
            </span>
            MOVIE APP
          </h1>
        </CenterSection>
        <RightSection>
          <p>FOLLOW US:</p>
          <span className="follow-us">
            <BsFacebook />
          </span>
          <span className="follow-us">
            <GrInstagram />
          </span>
          <span className="follow-us">
            <BsTwitter />
          </span>
          <span className="follow-us">
            <ImYoutube />
          </span>
        </RightSection>
      </FooterSection>
      <FooterOne>&copy;2024 ALL RIGHT RESERVED.</FooterOne>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  padding-top: 20px;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #eee;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LeftSection = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }
`;

const LeftSectionLink = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  color: #80395a;
`;

const CenterSection = styled.div`
  text-align: center;
  color: #80395a;

  h1 {
    font-size: 80px;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
    h1 {
      font-size: 40px;
    }
  }
`;

const RightSection = styled.div`
  display: inline;
  align-items: center;

  p {
    margin-bottom: 15px;
    margin-left: 10px;
    font-size: 25px;
    color: #80395a;
  }

  .follow-us {
    margin: 10px 12px;
    cursor: pointer;
    color: #80395a;
    font-size: 23px;
  }

  @media screen and (max-width: 768px) {
    p {
      margin-left: 0;
    }
    .follow-us {
      font-size: 20px;
    }
  }
`;

const FooterOne = styled.p`
  background-color: black;
  padding: 10px 20px;
  text-align: center;
  color: #fff;
  font-size: 25px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
