import React from 'react';
import './contactPage.css';

import { Link } from 'react-router-dom';

import { BsSearch, BsList } from 'react-icons/bs';

function Item({ valor }) {
   return valor ? <BsSearch /> : <BsList />;
}

const ContactPage = () => {
   return (
      <section className='container-contact'>
         <div className='hero-contact'>
            <h3 className='hero-contact-title'>
               Let's chat,
               <br />
               Tell me about your project
            </h3>
         </div>
         <form className='container-inputs'>
            <b className='inputs-title'>
               Send us a message <br />
               Contact Us!
            </b>
            <input type='text' className='input-name' placeholder='Your name' required />
            <input
               type='email'
               className='input-email'
               placeholder='Your email'
               required
            />
            <textarea
               cols='30'
               rows='5'
               className='input-message'
               placeholder='Your message for us'
               required
            ></textarea>
            <button type='submit' className='btn-send-message'>
               Send message
            </button>
         </form>
      </section>
   );
};

export default ContactPage;
