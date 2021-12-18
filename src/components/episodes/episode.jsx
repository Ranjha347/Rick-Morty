import React, { useState, useEffect } from "react";
import Header from "./header";
import Menu from "./menu";
import EpiCard from "./epiCard"

export default function Episode() {

   let [episode, setEpisode] = useState(2);
   let [episodeIndex, setepisodeIndex] = useState(0);
   let [results, setResults] = useState([]);
   let [characters, setCharacters] = useState([])

   let api = `https://rickandmortyapi.com/api/episode/${episode}`;
   let AllEpisodes = [];


   (() => {
      for (let i = 1; i < 52; i++) {
         AllEpisodes.push(i)
      }
   })()


   function ChangeEpisode(event) {
      let str = event.target.value;
      let num = str.match(/\d+/g);
      setEpisode(parseInt(num) + 1)
   }

   useEffect(() => {
      (async () => {
         try {
            const response = await fetch(api);
            const data = await response.json();
            setResults(data);
            let characters = await Promise.all(data.characters.map((url) => {
               return fetch(url).then(response => response.json())
            }))
            setCharacters(characters)
         } catch (error) { }
      })();
   }, [api]);




   return (
      <div className="container-fluid pt-5">


         <Header
            episode_name={results.name}
            info={results.air_date}
         />


         <div className="row">
            <div className="col-lg-3 text-center pb-5">
               <h2>Pick Episode</h2>
              
               <Menu
                functional = { ChangeEpisode}
                  name={AllEpisodes[episodeIndex]}
                  value={AllEpisodes}
               />
              


            </div>

            <div className="col-lg-9">
               <div className="cards">
                  {
                     characters.map((character, index) => (
                        <EpiCard
                           key={index}
                           name={character.name}
                           location={character.location.name}
                           status={character.status}
                           image={character.image}
                           id={character.id}
                        ></EpiCard>
                     ))
                  }


               </div>
            </div>
         </div>
      </div >
   )
}
