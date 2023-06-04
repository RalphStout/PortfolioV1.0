import './ContactForm.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_adpnnnd', 'template_vx53dxn', form.current, 'hdJACtUqL0Wgg9RC9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return(
        <div className="ContactContainer" id='ContactContainer'>
            <div className="contacttext">
                <div className="innertext" style={{fontSize: 50, color: 'white'}}>INTERESTED?</div>
                <div className="innertext" style={{fontSize: 25, color: '#14CC60'}}>SEND A MESSAGE</div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className='inputgroups'>
                        <input type="text" id='name' name='from_name'></input>
                        <label for="name">Name</label>
                    </div>
                    <div className='inputgroups'>
                        <input type="text" id='company' name='company'></input>
                        <label for="company">Company</label>
                    </div>
                </div>
                <div className="row">
                    <div className='inputgroups'>
                        <input type="email" id='email' name='sender_email'></input>
                        <label for="email">Email</label>
                    </div>
                    <div className='inputgroups'>
                        <input type="text" id='phone' name='phone'></input>
                        <label for="phone">Phone #</label>
                    </div>
                </div>
                <div className="inputgroups">
                    <textarea id='message' rows='6' cols='50' name='message'></textarea>
                    <label for='message'>Messages</label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;