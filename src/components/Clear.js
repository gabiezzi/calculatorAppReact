import React from "react";
import "../stylesheet/Clear.css";

export const Clear = (props) => {
  return (
    <div 
      className="boton-clear" 
      onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};
