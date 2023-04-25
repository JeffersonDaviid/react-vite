import { React, useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Boton from './components/Boton';
import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import { StoreContext } from './context/StoreContext';

import { Route, Routes } from 'react-router-dom';

import AboutPage from './app/Pages/About/AboutPage';
import ContactPage from './app/Pages/Contact/ContactPage';

function App() {
   const { nameCard, loadDataApiName } = useContext(StoreContext);

   useEffect(() => {
      loadDataApiName();
   }, [nameCard]);

   return (
      <div className='App'>
         <NavBar />
         <Routes>
            <Route index path='/react-vite/' element={<Home />} />
            <Route path='/react-vite/sobre-nosotros' element={<AboutPage />} />
            <Route path='/react-vite/contactos' element={<ContactPage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;

const Home = () => {
   const {
      moveToLeft,
      moveToRight,
      cards,
      handleButtonLeft,
      handleButtonRight,
      cardsForName,
   } = useContext(StoreContext);
   return (
      <>
         <h1 className='title'>
            RICK and MORTY
            <br /> STORE
         </h1>
         <div className='container-cards-search'>
            {cardsForName.map((card) => (
               <Card data={card} key={card.id} />
            ))}
         </div>
         <section className='hero-container'>
            <p className='hero-text'>
               <b className='hero-text-title'>LA CIUDADELA Y LA CURVA FINITA CENTRAL</b>
               En este final de temporada se revela la verdadera participación de Rick en
               la creación de la Ciudadela o el Consejo moderno. Además, debido a que Evil
               Morty tiene que escanear el cerebro de Rick C-137 para entender cómo romper
               la Curva Finita Central, se sugiere que a él se le ocurrió la idea. Aunque
               no se revelan sus motivos, queda claro que a él nunca le importó, ya
               abandonó la Ciudadela y el Consejo.
            </p>
            <img
               src='https://www.hdwallpapers.in/download/rick_and_morty_hd_adult_swim-1600x900.jpg'
               alt='Hero de pagina web'
            />
         </section>
         <div className='container-button'>
            <Boton isEnable={handleButtonLeft()} handleClic={moveToLeft}>
               letf
            </Boton>
            <Boton isEnable={handleButtonRight()} handleClic={moveToRight}>
               Right
            </Boton>
         </div>
         <div className='container-cards'>
            {cards.map((card) => (
               <Card data={card} key={card.id} />
            ))}
         </div>
         <div className='container-button'>
            <Boton isEnable={handleButtonLeft()} handleClic={moveToLeft}>
               letf
            </Boton>
            <Boton isEnable={handleButtonRight()} handleClic={moveToRight}>
               Right
            </Boton>
         </div>
      </>
   );
};
