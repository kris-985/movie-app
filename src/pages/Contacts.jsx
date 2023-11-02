import React from 'react';
import './Contacts.css';
import { MdOutlineMailLock } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BsPhoneVibrate } from 'react-icons/bs';

const Contacts = () => {
  return (
    <div className="chatSection">
      <h1 className="mainTitle">LET'S CHAT!</h1>
      <p className="subTitle">We would like to learn what is your opinion for our project!</p>
      <div className="icons">
        <div className="icon">
          <span><BsPhoneVibrate /></span>
          <p>847-868-8777</p>
        </div>
        <div className="icon">
          <span><MdLocationOn /></span>
          <p>27-1 Stanley Gardens, London, United Kingdom</p>
        </div>
        <div className="icon">
          <span><MdOutlineMailLock /></span>
          <p>hello@movie-app.com</p>
        </div>
      </div>
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvb2dsZSUyMG1hcCUyMGxvY2F0ZWQlMjB1bml0ZWQlMjBraW5nZG9tfGVufDB8fDB8fHww" alt="" />
      </div>
    </div>
  );
};

export default Contacts;
