import client from './client';

export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  //   console.log(resp);
  const data = await resp.json();
  console.log(data);
  return data;
}

export async function getDogsById(id) {
  let request = await client.from('dogs').select('*').match({ id }).single();
  return request;
}
