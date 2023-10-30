import React from 'react';
import { useState } from 'react'
import './NavBar.css';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const { user,logOut } = UserAuth();
    const handleLogout= async()=>{
        try {
            await logOut();
        } catch (error) {
           console.log(error); 
        }
    }
    console.log(user);

    return (
        <div>
            <div className='navbar'>
                <div className='container'>
                    <Link to="/" className='logo'>
                        <div>
                            <h1><span><GiFilmProjector /></span>MOVIES</h1>
                        </div>
                    </Link>

                    <div className='button'>
                        {user?.email ?
                            (<div>
                                <Link to="account">
                                    <button className='one'>Account</button>
                                </Link>
                                <Link to="logout">
                                    <button className='one'onClick={handleLogout}>Logout</button>
                                </Link>
                            </div>)
                            :
                            (<div>
                                <Link to="signup">
                                    <button className='one'>SignUp</button>
                                </Link>
                                <Link to="login">
                                    <button className='one'>Login</button>
                                </Link>
                            </div>)

                        }
                    </div>

                    <div>
                        <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
                            <li className='link'>
                                <Link to="/" className='link-one'>
                                    <li><span><AiFillHome /></span>Home</li>
                                </Link>
                            </li>
                            <li className='link'>
                                <Link to="aboutus" className='link-one'>
                                    <li><span><BsFillInfoCircleFill /></span>About us</li>
                                </Link>
                            </li>
                            <li className='link'>
                                <Link to="contacts" className='link-one'>
                                    <li><span><IoMdContact /></span>Contacts</li>
                                </Link>
                            </li>
                            <li className='link'>
                                <Link to="favourites" className='link-one'>
                                    <li><span><MdFavorite /></span>Favourites</li>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <div className='hamburger' onClick={handleClick}>
                                {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default NavBar