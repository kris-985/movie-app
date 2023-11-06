import { Link } from 'react-router-dom';
import './Footer.css';
import React from 'react'
import { GiFilmProjector } from 'react-icons/gi';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { ImYoutube } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-section'>
                <div className='left-section'>
                    <ul>

                        <Link to="aboutus" className='left-section-one'>
                            <li>ABOUT US</li>
                        </Link>


                        <Link to="contacts" className='left-section-one'>
                            <li>CONTACTS</li>
                        </Link>


                        <Link to="privacypolicy" className='left-section-one'>
                            <li>PRIVACY POLICY</li>
                        </Link>

                    </ul>
                </div>
                <div className='center-section'>
                    <h1 className='center-section-one'><span><GiFilmProjector /></span>MOVIES</h1>
                </div>
                <div className='right-section'>
                    <p className='right-section-one'>FOLLOW US:</p>

                    <span className='follow-us'><BsFacebook /></span>

                    <span className='follow-us'><GrInstagram /></span>

                    <span className='follow-us'><BsTwitter /></span>

                    <span className='follow-us'><ImYoutube /></span>
                </div>
            </div>

            <p className='footer-one'>&copy;2023 ALL RIGHT RESERVED.</p>
        </div>
    )
}

export default Footer;