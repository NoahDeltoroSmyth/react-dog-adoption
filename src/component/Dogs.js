import React from 'react';

export default function Dogs({ name, breed, image, age, bio, showInfo = false, handleDelete }) {
  return (
    <div className="dog-card">
      <h1>{name}</h1>
      <p>{breed}</p>
      <img alt="dog-image" src={`${image}`}></img>
      <p>
        {name} is a {age} year old {breed}
      </p>
      {showInfo && (
        <div>
          <p>{bio}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
