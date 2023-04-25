import { React, useContext, useState, useEffect } from 'react';
import './navBar.css';
import { BsSearch, BsList } from 'react-icons/bs';
import { StoreContext } from '../../context/StoreContext';
import { Link, Outlet, NavLink } from 'react-router-dom';

const Navbar = () => {
   const { setNameCard } = useContext(StoreContext);
   const [menuToggle, setMenuToggle] = useState('');
   const handleMenu = () => {
      menuToggle.trim().length == 0
         ? setMenuToggle('nav-menu-mobile')
         : setMenuToggle('');
   };

   return (
      <>
         <nav className='container-nav'>
            <img
               src='https://images7.alphacoders.com/633/633262.png'
               alt=''
               className='nav-icon-logo'
            />
            <div className='container-nav-search'>
               <input
                  autoComplete='true'
                  onChange={(e) => setNameCard(e.target.value)}
                  type='text'
                  className='nav-search'
                  placeholder='Ingrese su busqueda'
               />
               <BsSearch className='icon-search-nav' />
            </div>
            <BsList className='icon-menu-nav' onClick={handleMenu} on />
            <ul className={`${'container-items ' + menuToggle}`.trim()}>
               <NavLink exact to='/react-vite/' className='nav-item'>
                  Inicio
               </NavLink>
               <NavLink exact to='/react-vite/proyectos' className='nav-item'>
                  Proyectos
               </NavLink>
               <NavLink exact to='/react-vite/sobre-nosotros' className='nav-item'>
                  Sobre nosotros
               </NavLink>
               <NavLink exact to='/react-vite/contactos' className='nav-item'>
                  Contáctos
               </NavLink>
            </ul>
         </nav>
         <Outlet />
      </>
   );
};

export default Navbar;
