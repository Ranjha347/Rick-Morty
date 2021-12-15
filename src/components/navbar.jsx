import React from 'react'

export default function navbar() {
   return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">Rick & Morty <span>NTF</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <a className="nav-link" href="#">Characters
                        <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                     <a className="nav-link" href="#">Episodes <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                     <a className="nav-link" href="#">Locations <span className="sr-only">(current)</span></a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>



   )
}
