import React, { useEffect, useState } from 'react';
import { deleteDog, getDogsById } from '../services/dogRoute';
import { useParams } from 'react-router-dom';
import Dogs from '../component/Dogs';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function DogDetail() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

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

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(id);
    history.push('/');
  };

  return (
    <>
      <div className="dog-detail">
        <Dogs {...dog} showInfo={true} handleDelete={handleDelete} />
      </div>
      <div className="edit">
        <Link to={`/dogs/${id}/edit`}>Edit</Link>
      </div>
      <button className="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
