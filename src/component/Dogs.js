import React from 'react';

export default function Dogs({ id, name, breed, image, age }) {
  return (
    <div className="dog-card">
      <h1>{name}</h1>
      <p>{breed}</p>
      <img alt="dog-image" src={`${image}`}></img>
      <p>
        {name} is a {age} year old {breed}
      </p>
    </div>
  );
}
