import React, { useState, useEffect } from 'react'
import TarjetaPersonaje from '../TarjetaPersonaje';

export default function Characters() {
    let [results, setResults] = useState([]);

    let api = "https://rickandmortyapi.com/api/character";

    useEffect(() => {
        (async () => {
            const response = await fetch(api)
            const data = await response.json()
            setResults(data.results);
        })()
    }, [api])
  
    return (
        <React.Fragment>
        <main className="main">
        <div>
          <h2>Characters</h2>
        </div>
        <div>
          <div className="main-filter">
            <h3>Filters</h3>
          </div>
          <div className="main-listcontainer">
            <div className="main-listcontainer-searchbar">
              <input></input>
              <button>Search</button>
            </div>
            <div className="main-listcontainer-charlist">
              {results.map((personaje, index) => (
                <TarjetaPersonaje
                  key={index}
                  name={personaje.name}
                  location={personaje.location.name}
                  status={personaje.status}
                  image={personaje.image}
                ></TarjetaPersonaje>
              ))}
            </div>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </main>
      </React.Fragment>
    )
}
