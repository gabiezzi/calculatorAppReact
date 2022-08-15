import "./App.css";
import { Boton } from "./components/Boton";
import { Clear } from "./components/Clear";
import { Pantalla } from "./components/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";
import { FreecodecampLogo } from "./components/FreecodecampLogo.js";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const ejecutarCalculo = () => {
    try {
      setInput(evaluate(input));
    } catch (error) {
      setInput("error");
    }
  };

  return (
    <div className="App">
      <FreecodecampLogo />
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={ejecutarCalculo}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila"></div>
        <Clear manejarClear={() => setInput("")}>CLEAR</Clear>
      </div>
    </div>
  );
}

export default App;
