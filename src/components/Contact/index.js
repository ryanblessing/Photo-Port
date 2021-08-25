/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

function ContactForm() {
    /* this is the hook that'll manage the form data. 
        feature of the hook is to initialize the values. in the useState we make it clear by having the empty '' to all fields involved
    */
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    /*this is the deconstructing of the formState element that is taking 3 values of name,email,message */
    const { name, email, message } = formState;

    /*handleChange captures the input to the name, email, and message element and the syntax its set to is why? */
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    /*function for the handle submit expression*/
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }
    console.log(formState)
    //jsx--- this is creating the dom elements
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
               <div>
                   <label htmlFor="name">Name:</label>
                   <input type="text" defaultValue={name} onChange={handleChange} name="name"/>
               </div>
               <div>
                   <label htmlFor="email">Email:</label>
                   <input type="email" defaultValue={email} name="email" onChange={handleChange}/>
               </div>
               <div>
                   <label htmlFor="message">Message:</label>
                   <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>
               </div>
               <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;