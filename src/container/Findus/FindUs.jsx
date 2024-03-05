import React from 'react';
import "./FindUs.css";

const FindUs = () => (
  <section className='findUs' id='contactus'>
    <div className='findUs__title'>
      <h1>What can us do for you?</h1>
      <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
    </div>
    <form action="" className='findUs__form' >
        <div className='findUs__field'>
          <input type="text" required name="name" id="" placeholder='Your Name'/>
          <input type="email" required name="email" id="" placeholder='Email'/>
        </div>
        <div className='findUs__field'>
          <input type="text" name="reasone" id="" placeholder='Reason for Contacting'/>
          <input type="text" required name="phoneNumber" id="" placeholder='Phone'/>
        </div>
        <textarea name="message" required id="" cols="30" rows="10"  placeholder='Message ( Indicates a required field )'/>  
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default FindUs;
