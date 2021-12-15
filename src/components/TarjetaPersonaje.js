import React from "react";

export default function TarjetaPersonaje({ name, location, status, image }) {
  let statusclass = "status-text " + status;
  return (
    <div class="card text-center">
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{location}</p>
        <p className={statusclass}> {status}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  );
}
