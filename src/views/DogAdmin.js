import React from 'react';
import DogForm from '../component/DogForm';
import { useDog } from '../Context/DogContext';
import { addDog } from '../services/dogRoute';

export default function DogAdmin() {
  const { name, breed, age, bio, image, setName, setBreed, setAge, setBio, setImage } = useDog();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status } = await addDog(name, breed, age, bio, image);
    if ((name.length, breed.length, age.length, bio.length, image.length === 0)) {
      alert('You must add information about the doggo');
    } else if (status >= 400) {
      alert('Status error');
    } else {
      alert('Successfully added');
    }
    setName('');
    setBreed('');
    setAge('');
    setBio('');
    setImage('');
  };

  return (
    <div>
      <DogForm
        name={name}
        setName={setName}
        breed={breed}
        setBreed={setBreed}
        age={age}
        setAge={setAge}
        bio={bio}
        setBio={setBio}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
