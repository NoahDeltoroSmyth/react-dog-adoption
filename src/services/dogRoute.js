import client, { checkError } from './client';

export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function getDogsById(id) {
  let request = await client.from('dogs').select('*').match({ id }).single();
  return checkError(request);
}

export async function updateDog(id, name, breed, age, bio, image) {
  const resp = await client.from('dogs').update({ name, breed, age, bio, image }).eq('id', id);
  return checkError(resp);
}
