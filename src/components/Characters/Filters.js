import React from "react";

export default function Filters({ functional, name, value1, value2, value3 }) {
  return (
    <div>
      <p>{name}</p>
      <span>
        <input
          type="radio"
          name={name}
          value={value1}
          autocheck="false"
          onClick={functional}
        />
        {value1}
        <input
          type="radio"
          name={name}
          value={value2}
          autocheck="false"
          onClick={functional}
        />
        {value2}
        <input
          type="radio"
          name={name}
          value={value3}
          autocheck="false"
          onClick={functional}
        />
        {value3}
      </span>
    </div>
  );
}
