import React from "react";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { logOut } from "../../services/auth.services";
import styled from "styled-components";
import Swal from "sweetalert2";

const NavBar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { user } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: "success",
        title: "Logout successful",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  const handleNavLinkClick = () => {
    setClick(false);
  };

  return (
    <NavbarContainer>
      <Container>
        <Logo to="/">
          <h1>
            <span>
              <GiFilmProjector />
            </span>
            MOVIE APP
          </h1>
        </Logo>
        <NavMenu className={click ? "nav-menu active" : "nav-menu"}>
          <CloseIcon onClick={() => setClick(!click)}>
            <FaRegTimesCircle />
          </CloseIcon>
          <NavItem>
            <NavLink to="/" onClick={handleNavLinkClick}>
              <span>
                <AiFillHome />
              </span>
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="aboutus" onClick={handleNavLinkClick}>
              <span>
                <BsFillInfoCircleFill />
              </span>
              ABOUT US
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contacts" onClick={handleNavLinkClick}>
              <span>
                <IoMdContact />
              </span>
              CONTACTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="favourites" onClick={handleNavLinkClick}>
              <span>
                <MdFavorite />
              </span>
              FAVOURITES
            </NavLink>
          </NavItem>
        </NavMenu>
        <Hamburger onClick={() => setClick(!click)}>
          <HiOutlineMenuAlt4 />
        </Hamburger>
        <ButtonGroup>
          {user?.email ? (
            <div>
              <Link to="logout">
                <Button onClick={handleLogout}>Logout</Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="signup">
                <Button>SignUp</Button>
              </Link>
              <Link to="login">
                <Button>Login</Button>
              </Link>
            </div>
          )}
        </ButtonGroup>
      </Container>
      <Outlet />
    </NavbarContainer>
  );
};

export default NavBar;

const NavbarContainer = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 5px solid #80395a;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 25px;
  color: #80395a;
  text-decoration: none;

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 940px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  background-color: #80395a;
  color: #fff;
  font-size: 25px;
  border-radius: 10px;
  padding: 10px 20px;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  @media screen and (max-width: 940px) {
    padding: 6px 12px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  @media screen and (max-width: 940px) {
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    z-index: 999;

    &.active {
      transform: translateX(0);
    }
  }
`;

const NavItem = styled.li`
  padding: 10px 10px;
  font-size: 25px;

  @media screen and (max-width: 940px) {
    padding: 20px 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: #80395a;
  text-decoration: none;
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
  }

  @media screen and (max-width: 940px) {
    justify-content: center;
    font-size: 20px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 940px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 32px;   
`;

const CloseIcon = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 32px;
  cursor: pointer;
  z-index: 1000;

  @media screen and (max-width: 940px) {
    display: block;
  }
`;
