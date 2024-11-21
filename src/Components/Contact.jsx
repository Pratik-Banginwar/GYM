import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>Contact Us</h1>
        <form>
            <input type="text" placeholder='Enter Full Name' required />
            <input type="email" placeholder='Enter Email-id' required />
            <textarea placeholder='Write Here....' name='Message'></textarea>
            <input type="Submit" value='Send' />
        </form>
    </div>
  )
}

export default Contact