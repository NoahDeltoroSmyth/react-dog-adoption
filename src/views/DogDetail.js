import React, { useEffect, useState } from 'react';
import { getDogsById } from '../services/dogRoute';
import { useParams } from 'react-router-dom';
import Dogs from '../component/Dogs';

export default function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  //   const params = useParams();

  useEffect(() => {
    getDogsById(id).then(({ data }) => setDog(data));
  }, [id]);
  return (
    <div>
      <Dogs {...dog} />
    </div>
  );
}
