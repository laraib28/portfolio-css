import React from 'react'
import "../style/contact.css"   


 function Contact() {
  return (
    <div className='main'>
      <div className='heading'>
        <h1>Contact us</h1>
      </div>
      <form action="form" className='form'>
        Name<input type="text" id='name' placeholder='Name'/>
        <br />
        <br />
        Email<input type="text" id='name' placeholder='Email'/>
        <br />
        <br />
        Phone<input type="text" id='name' placeholder='Phone'/>
        Message<textarea />
        <div className='btn'>
            <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

 export default Contact
