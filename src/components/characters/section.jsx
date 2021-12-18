import React, { useState, useEffect } from "react";
import TarjetaPersonaje from "./TarjetaPersonaje";

//  import Filters from "./Characters/Filters";


export default function Characters() {

   let [results, setResults] = useState([]);
   let [search, setSearch] = useState("");
   let [status, setStatus] = useState("");
   let [gender, setGender] = useState("");
   let [species, setSpecies] = useState("");
   let [page, setPage] = useState(1);
   let [maxPages, setMaxPages] = useState();
   let api = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

   function changePage(accion) {
      if (accion === "SUMA" && page < maxPages) {
         setPage(++page);
      }
      if (accion === "RESTA" && page > 1) {
         setPage(--page);
      }
      console.log(page);
   }
   function changeSearch(event) {
      setSearch(event.target.value);
   }

   function changeStatus(event) {
      setStatus(event.target.innerHTML);
   }

   function changeSpecies(event) {
      setSpecies(event.target.innerHTML);
   }
   function changeGender(event) {
      setGender(event.target.innerHTML);
      console.log(api);
   }

   function clearFilter() {
      setGender("");
      setSpecies("");
      setStatus("");
   }

   useEffect(() => {
      (async () => {
         try {
            const response = await fetch(api);
            const data = await response.json();
            setResults(data.results);
            setMaxPages(data.info.pages);
         } catch (error) { }
      })();
   }, [api]);

   return (
      <div className="container-fluid">
         <div className="row mt-5">
            <div className="col-lg-3  text-center mb-5">
               <h2>Filters</h2>
               <p className='text-primary p-text' onClick={clearFilter}>Clear Filter</p>
               <div className="dropdowns shadow">
                  <div class="dropdown">
                     <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Status
                     </a>
                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#" onClick={changeStatus} >Alive</a></li>
                        <li><a class="dropdown-item" href="#" onClick={changeStatus} >Dead</a></li>
                        <li><a class="dropdown-item" href="#" onClick={changeStatus} >Unknown</a></li>
                     </ul>
                  </div>
                  <br />
                  <div class="dropdown">
                     <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Species
                     </a>

                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#" onClick={changeSpecies}>Human</a></li>
                        <li> <a className="dropdown-item" href="#" onClick={changeSpecies}>Alien</a></li>
                        <li><a className="dropdown-item" href="#" onClick={changeSpecies} >Humanoid</a></li>
                     </ul>
                  </div>
                  <br />
                  <div class="dropdown">
                     <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                     Gender
                     </a>
                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#" onClick={changeGender}>male</a></li>
                        <li><a className="dropdown-item" href="#" onClick={changeGender}>Female</a></li>
                        <li><a className="dropdown-item" href="#" onClick={changeGender}>genderless</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="col-lg-9">
               <div className="group d-flex " >
                  <input type="text" className='form-control search-input' value={search} onChange={changeSearch} />
                  <button type="button" class="btn btn-primary ml-3" onClick={changeSearch}>Search</button>
               </div>

               <div className="cards">
                  {results ? (
                     results.map((personaje, index) => (
                        <TarjetaPersonaje
                           key={index}
                           name={personaje.name}
                           location={personaje.location.name}
                           status={personaje.status}
                           image={personaje.image}
                        ></TarjetaPersonaje>
                     ))
                  ) : (
                     <p>We couldn't find any results for <span className="couldn-find">"{search}"</span></p>
                  )}
               </div>

               <div className="n-p-btn d-flex justify-content-between">
                  <button className='btn btn-secondary' onClick={() => changePage("RESTA")} ><i class="fas fa-arrow-left"></i> Previous </button>
                  <button className='btn btn-secondary' onClick={() => changePage("SUMA")}>Next <i class="fas fa-arrow-right"></i></button>
               </div>
            </div>
         </div>
      </div>
   )
}
