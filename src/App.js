import react, { useState } from "react";
import "./App.css";
import TarjetaPersonaje from "./components/TarjetaPersonaje";

function App() {
  let [results, setResults] = useState([]);

  let api = "https://rickandmortyapi.com/api/character";

  fetch(api)
    .then((response) => response.json())
    .then((data) => setResults(data.results));

  return (
    <div>
      {results.map((personaje, index) => (
        <TarjetaPersonaje
          key={index}
          name={personaje.name}
          location={personaje.location.name}
        ></TarjetaPersonaje>
      ))}
    </div>
  );
}

export default App;
