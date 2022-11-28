// import fetch from 'node-fetch'
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  // get data from https://api.chucknorris.io/jokes/random
  const url = `https://api.chucknorris.io/jokes/random`
  let res = await fetch(url)
  res = await res.json()
  console.log({ res })
  try {
    return {
      post: res,
    };
  } catch (err) {
    console.error('ErrorNodeFetch', err)
    throw error(404, `${err.message}`);
  }
}


// import axios from 'axios';
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//   // get data from https://api.chucknorris.io/jokes/random
//   const url = `https://api.chucknorris.io/jokes/random`
//   let res = await axios.get(url)
//   console.log({ res })
//   try {
//     return {
//       post: res.data,
//     };
//   } catch (err) {
//     console.error('ErrorNodeFetch', err)
//     throw error(404, `${err.message}`);
//   }
// }