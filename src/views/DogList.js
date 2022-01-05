import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../services/dogRoute';
import Dogs from '../component/Dogs';
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
    <div className="dog-list">
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <Dogs {...dog} />
        </Link>
      ))}
    </div>
  );
}
