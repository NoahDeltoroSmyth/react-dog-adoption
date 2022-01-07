import React from 'react';

export default function DogForm({
  name,
  setName,
  breed,
  setBreed,
  age,
  setAge,
  bio,
  setBio,
  image,
  setImage,
  handleSubmit,
}) {
  return (
    <div className="form">
      <form>
        <h1>Dog Information</h1>
        <div className="form-control">
          <label>Name:</label>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Breed:</label>
          <input
            placeholder="Breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Age:</label>
          <input
            placeholder="Age"
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Bio:</label>
          <input
            placeholder="Bio"
            type="text"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Image:</label>
          <input
            placeholder="Image"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
