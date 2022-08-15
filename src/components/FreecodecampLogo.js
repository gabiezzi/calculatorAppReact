import React from 'react'
import '../stylesheet/FreecodecampLogo.css';
import freecodecampLogo from "../imagenes/logo.png";


export const FreecodecampLogo = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
        <img
          src={freecodecampLogo}
          className="freecodecamp-logo"
          alt="Logo FreeCodeCamp"
        />
      </div>
  )
}
