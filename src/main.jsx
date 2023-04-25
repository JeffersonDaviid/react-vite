import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import { StoreContextProvider } from './context/StoreContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <StoreContextProvider>
         <App />
      </StoreContextProvider>
   </BrowserRouter>
);
