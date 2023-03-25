import { React, useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Boton from './components/Boton';
import { BsSearch } from 'react-icons/bs';
import { StoreContext } from './context/StoreContext';

function App() {
   const { moveToLeft, moveToRight, cards, handleButtonLeft, handleButtonRight } = useContext(StoreContext);

   const [name, setName] = useState('');
   const [cardsForName, setCardForName] = useState([]);
   const RYM_API_FOR_NAME = 'https://rickandmortyapi.com/api/character/?name=';

   const loadDataApiName = async () => {
      try {
         const res = await fetch(RYM_API_FOR_NAME + name);
         console.log(res);
         if (res.status != 404 && name.length != 0) {
            const data = await res.json();
            const data2 = data.results;
            setCardForName(data2);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      loadDataApiName();
   }, [name]);

   return (
      <div className='App'>
         <nav className='container-nav'>
            <img src='https://images7.alphacoders.com/633/633262.png' alt='' className='nav-icon-logo' />
            <div className='container-nav-search'>
               <input onChange={(e) => setName(e.target.value)} type='text' className='nav-search' placeholder='Ingrese su busqueda' />
               <BsSearch className='icon-search-nav' />
            </div>
            <ul className='container-items'>
               <li className='nav-item'>Work</li>
               <li className='nav-item'>About</li>
               <li className='nav-item'>Journal</li>
               <li className='nav-item'>Contact</li>
            </ul>
         </nav>

         <h1 className='title'>RICK and MORTY STORE</h1>
         <div className='container-cards'>
            {cardsForName.map((card) => (
               <Card data={card} key={card.id} />
            ))}
         </div>
         <div className='hero-container'>
            <p className='hero-text'>
               <b className='hero-text-title'>LA CIUDADELA Y LA CURVA FINITA CENTRAL</b>
               En este final de temporada se revela la verdadera participación de Rick en la creación de la Ciudadela o el Consejo moderno. Además,
               debido a que Evil Morty tiene que escanear el cerebro de Rick C-137 para entender cómo romper la Curva Finita Central, se sugiere que a
               él se le ocurrió la idea. Aunque no se revelan sus motivos, queda claro que a él nunca le importó, ya abandonó la Ciudadela y el
               Consejo.
            </p>
            <img src='https://www.hdwallpapers.in/download/rick_and_morty_hd_adult_swim-1600x900.jpg' alt='Hero de pagina web' />
         </div>
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
         <div className='profile'>Rick and Morty x Jefferson David</div>
      </div>
   );
}

export default App;
