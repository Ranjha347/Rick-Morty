import React, { useState, useEffect } from 'react'
import TarjetaPersonaje from '../TarjetaPersonaje';

export default function Characters() {
    let [results, setResults] = useState([]);
    let [search, setSearch] = useState('');
    let [status, setStatus] = useState('');
    let [gender, setGender] = useState('');
    let [species, setSpecies] = useState('');
    let [page, setPage] = useState(1);
    let [maxPages, setMaxPages] = useState();
    let api = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    function changePage(accion){
      if (accion === "SUMA" && page < maxPages) {
        setPage(++page);}
      if (accion === "RESTA" && page > 1) {
        setPage(--page);}
        console.log(page);
    }
    function changeSearch (event){
        setSearch(event.target.value) 
    
    }

    useEffect(() => {
        (async () => {
            try{
            const response = await fetch(api)
            const data = await response.json()
            setResults(data.results);
            setMaxPages(data.info.pages)}
            catch(error){
              
            }

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
                <input
                type="search"
                value={search}
                onChange={changeSearch}
                ></input>
                <button>Search</button>
              </div>
              <div className="main-listcontainer-charlist">
                {results ? 
                results.map((personaje, index) => (
                  <TarjetaPersonaje
                    key={index}
                    name={personaje.name}
                    location={personaje.location.name}
                    status={personaje.status}
                    image={personaje.image}
                  ></TarjetaPersonaje>
                )):
                (
                  <p>Error ...</p>
                )}
              </div>
              <div>
                <button onClick={()=> changePage("RESTA")}>anterior</button>
                <button onClick={()=> changePage("SUMA")}>siguiente</button>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
}
