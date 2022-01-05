import React from 'react';

export default function Dogs({ name, breed, image, age, bio }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{breed}</p>
      <img alt="dog-image" src={`${image}`}></img>
      <p>
        {name} is a {age} year old {breed}
      </p>
    </div>
  );
}
