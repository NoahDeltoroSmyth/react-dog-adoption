import React from 'react';
import { Link } from 'react-router-dom';

export default function Dogs({ id, name, breed, image, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{breed}</p>
      <img alt="dog-image" src={`${image}`}></img>
      <p>
        {name} is a {age} year old {breed}
      </p>
      <Link to={`/dogs/${id}/edit`}>Edit</Link>
    </div>
  );
}
