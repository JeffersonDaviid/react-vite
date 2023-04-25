import { createContext, useState, useEffect } from 'react';
// import { getUsuarios } from '../app/Backend/conection';

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
   const RYM_API = 'https://rickandmortyapi.com/api/character/?page=';
   const [numImage, setNumImage] = useState(1);
   const [cards, setCards] = useState([]);

   const loadDataApi = async () => {
      try {
         const res = await fetch(RYM_API + numImage);
         if (res.status != 404) {
            const data = await res.json();
            const data2 = data.results;
            setCards(data2);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      loadDataApi();
   }, [numImage]);

   const moveToLeft = () => {
      setNumImage(numImage - 1);
   };

   const moveToRight = () => {
      setNumImage(numImage + 1);
      // getUsuarios();
   };

   const handleButtonLeft = () => {
      return numImage > 1 ? true : false;
   };
   const handleButtonRight = () => {
      return numImage < 42 ? true : false;
   };

   const [nameCard, setNameCard] = useState('');
   const [cardsForName, setCardForName] = useState([]);
   const RYM_API_FOR_NAME = 'https://rickandmortyapi.com/api/character/?name=';

   const loadDataApiName = async () => {
      try {
         if (nameCard.length != 0) {
            const res = await fetch(RYM_API_FOR_NAME + nameCard);
            console.log(res);
            if (res.status != 404) {
               const data = await res.json();
               const data2 = data.results;
               setCardForName(data2);
            }
         } else {
            setCardForName([]);
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <StoreContext.Provider
         value={{
            cards,
            moveToLeft,
            moveToRight,
            handleButtonLeft,
            handleButtonRight,
            nameCard,

            cardsForName,
            loadDataApiName,
            setNameCard,
         }}
      >
         {props.children}
      </StoreContext.Provider>
   );
};
