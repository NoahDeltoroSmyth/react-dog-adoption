import React, { useEffect, useState } from 'react';
import { deleteDog, getDogsById } from '../services/dogRoute';
import { useParams, useHistory } from 'react-router-dom';
import Dogs from '../component/Dogs';
import { Link } from 'react-router-dom';

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
    const { status } = await deleteDog(id);
    if (status >= 400) {
      alert('Status error');
    } else {
      alert('Successfully deleted');
      history.push('/dogs');
    }
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
