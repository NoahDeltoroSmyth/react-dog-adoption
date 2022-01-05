import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../services/dogRoute';
import Dogs from '../component/Dogs';
import { Link } from 'react-router-dom';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

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
