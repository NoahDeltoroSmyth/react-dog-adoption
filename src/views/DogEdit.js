import React, { useState, useEffect } from 'react';
import DogForm from '../component/DogForm';
import { getDogsById } from '../services/dogRoute';
import { useParams } from 'react-router-dom';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDogsById(params.id);
      setName(resp.name);
      setBreed(resp.breed);
      setAge(resp.age);
      setBio(resp.bio);
      setImage(resp.image);
    };
    fetchData();
  }, [params.id]);
  return (
    <div>
      <h1>Edit Dog</h1>
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
      />
    </div>
  );
}
