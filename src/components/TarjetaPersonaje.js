import React from "react";

export default function TarjetaPersonaje({ name, location, status, image}) {
  let statusclass  = "status " + status
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-location">{location}</p>
        <p className={statusclass}>{status}</p>
      </div>
    </div>
  );
}
