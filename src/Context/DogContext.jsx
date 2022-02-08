import { useState, useContext, createContext } from 'react';

const DogContext = createContext();

const DogProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const contextValue = {
    name,
    setName,
    breed,
    setBreed,
    age,
    setAge,
    bio,
    setBio,
    image,
    setImage,
  };
  return <DogContext.Provider value={contextValue}>{children}</DogContext.Provider>;
};

const useDog = () => {
  const context = useContext(DogContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext Provider');
  }
  return context;
};

export { DogProvider, useDog };
