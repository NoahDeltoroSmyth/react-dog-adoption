import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../services/dogRoute';
import { Link } from 'react-router-dom';

export default function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {dogs.map((dog) => (
        <Link key={dog.id}>{dog.name}</Link>
      ))}
    </div>
  );
}
