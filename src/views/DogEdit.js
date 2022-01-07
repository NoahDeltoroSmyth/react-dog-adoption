import React, { useState, useEffect } from 'react';
import DogForm from '../component/DogForm';
import { getDogsById, updateDog } from '../services/dogRoute';
import { useParams, useHistory } from 'react-router-dom';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const params = useParams();
  const history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status } = await updateDog(params.id, name, breed, age, bio, image);
    if (status >= 400) {
      alert('Status error');
    } else {
      alert('Successfully edited');
      history.push('/dogs');
    }
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
