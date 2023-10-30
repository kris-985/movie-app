import React from 'react'

const Contacts = () => {
  return (
    <div>
      <div className='container'>
        <form>
          <h1>Contacts</h1>
          <label for="fName">First Name</label>
          <input type="text" id="fname" name="First name" placeholder='Your name...'></input>

          <label for="lName">Last Name</label>
          <input type="text" id="lname" name="Last name" placeholder='Your last name...'></input>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}

export default Contacts