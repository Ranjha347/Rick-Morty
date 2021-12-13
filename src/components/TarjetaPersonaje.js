import React from "react";

export default function TarjetaPersonaje({ name, location }) {
  return (
    <div className="card">
      <img src="#" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-location">{location}</p>
        <p>Status</p>
      </div>
    </div>
  );
}
