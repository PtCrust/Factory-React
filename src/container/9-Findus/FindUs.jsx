import React from 'react';
import "./FindUs.css";
import { useForm, ValidationError } from '@formspree/react';



const FindUs = () => {
  const [state, handleSubmit] = useForm("xzbnvdlr");

  return (
    <section className='findUs' id='contactus'>
      <div className='findUs__title'>
        <h1>What can us do for you?</h1>
        <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
      </div>

      <form action="https://formspree.io/f/xzbnvdlr" method='post' className='findUs__form' onSubmit={handleSubmit} >

        {/* <form action="" method='post' className='findUs__form' > */}
        <div className='findUs__field'>

          <input id="name" required type="text" name="name" placeholder='Name' />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input id="email" required type="email" name="email" placeholder='Email' />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

        </div>
        <div className='findUs__field'>
          <input id="name" required type="text" name="reason" placeholder='Reason for Contacting' />
          <ValidationError prefix="Reason" field="reason" errors={state.errors} />

          <input id="phoneNumber" required type="text" name="phoneNumber" placeholder='Phone' />
          <ValidationError prefix="Phone" field="phoneNumber" errors={state.errors} />

        </div>

        <textarea id="message" name="message" required cols="30" rows="10" placeholder='Message ( Indicates a required field )' />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting} className="submit">
          {state.submitting ? "Submitting..." : "Submit"}
        </button>

        {state.succeeded && (
          <p style={{ color: "var(--color-neutral)",fontWeight:"600",textAlign:"center" ,fontFamily:"var(--font-base)" }}>Your message has been sent <span style={{color:"green"}}>Successfully!</span></p>
        )}

      </form>
    </section>
  )
};

export default FindUs;
