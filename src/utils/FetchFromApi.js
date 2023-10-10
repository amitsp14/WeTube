// import axios from "axios";

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

// const options = {
//     params: {
//       maxResults: '50',

//     },
//     headers: {
//       'X-RapidAPI-Key': 'f1d4633cb6msh737b50ee8ed3793p179b2bjsnab3a38ac3dc7',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };
  

// export const fetchFromApi = async (url)=>{
//   const {data} = await axios.get(`${BASE_URL}/${url}`, options)

//   return data;
// }


import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
//  const apiKey = process.env.REACT_APP_RAPID_API_KEY;


const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'f1d4633cb6msh737b50ee8ed3793p179b2bjsnab3a38ac3dc7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
