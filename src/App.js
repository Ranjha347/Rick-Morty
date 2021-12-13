import react, { useState } from "react";
import "./App.css";
import TarjetaPersonaje from "./components/TarjetaPersonaje";
import { apitotal } from "./data/Api";

function App() {
  let [personajes, cambiaPersonajes] = useState({ apitotal });
  return (
    <div>
      <div>
        <TarjetaPersonaje></TarjetaPersonaje>
      </div>
    </div>
  );
}

export default App;
