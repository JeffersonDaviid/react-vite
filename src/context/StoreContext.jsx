import { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
   const heroPortrait = [
      {
         id: 361,
         name: 'Toxic Rick',
         status: 'Dead',
         species: 'Humanoid',
         type: "Rick's Toxic Side",
         gender: 'Male',
         origin: {
            name: 'Alien Spa',
            url: 'https://rickandmortyapi.com/api/location/64',
         },
         location: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/20',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
         episode: ['https://rickandmortyapi.com/api/episode/27'],
         url: 'https://rickandmortyapi.com/api/character/361',
         created: '2018-01-10T18:20:41.703Z',
      },
   ];

   const RYM_API = 'https://rickandmortyapi.com/api/character/?page=';
   const [numImage, setNumImage] = useState(1);
   const [cards, setCards] = useState(heroPortrait);

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
   };

   const handleButtonLeft = () => {
      return numImage > 1 ? true : false;
   };
   const handleButtonRight = () => {
      return numImage < 42 ? true : false;
   };

   return (
      <StoreContext.Provider value={{ cards, moveToLeft, moveToRight, handleButtonLeft, handleButtonRight }}>{props.children}</StoreContext.Provider>
   );
};
