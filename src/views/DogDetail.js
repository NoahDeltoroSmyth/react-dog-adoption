import React, { useEffect, useState } from 'react';
import { getDogsById } from '../services/dogRoute';
import { useParams } from 'react-router-dom';
import Dogs from '../component/Dogs';

export default function DogDetail() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogsById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <Dogs {...dog.data} />
    </div>
  );
}
