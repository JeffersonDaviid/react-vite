import React from 'react';
import Logo from '../../images/LogoJefferson.png';

import './footer.css';
import {
   BsFacebook,
   BsInstagram,
   BsLinkedin,
   BsGithub,
   BsYoutube,
   BsTwitter,
} from 'react-icons/bs';

const Footer = () => {
   return (
      <footer className='container-footer'>
         <div className='links-developer-contact'>
            <h2 className='developer-name'>
               DEVELOPER: <br />
               JEFFERSON DAVID
            </h2>
            <img src={Logo} className='developer-logo' alt='Logo creador' />
         </div>
         <div className='developer-details'>
            <div className='container-icons-footer'>
               <BsInstagram className='icon-instagram icon-social-media' />
               <BsFacebook className='icon-facebook icon-social-media' />
               <BsLinkedin className='icon-linkedin icon-social-media' />
               <BsGithub className='icon-github icon-social-media' />
               <BsYoutube className='icon-youtube icon-social-media' />
               <BsTwitter className='icon-twitter icon-social-media' />
            </div>
         </div>
         <p className='copyright-footer'>©Todos los derechos reservados 2023</p>
      </footer>
   );
};

export default Footer;
