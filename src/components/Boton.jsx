import React from 'react';
import '../styles/boton.css';

export const Boton = (props) => {
   return (
      <button className={`btn ${props.isEnable ? 'btn-enable' : 'btn-disable'}`} onClick={props.handleClic}>
         {props.children}
      </button>
   );
};
export default Boton;
