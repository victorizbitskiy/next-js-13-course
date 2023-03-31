import Image from 'next/image';
import React from 'react';

const axios = require("axios");
let res = {};

const MovieDetail = async ({ params }) => {
  const { movieId } = params


  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/get-details',
    params: { tconst: movieId },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    res = response.data
    console.log(res);
  }).catch(function (error) {
    console.error(error)
  });

  return (
    <div>
      <div>{res.title}</div>
      <Image alt='poster' src={res.image.url} width={300} height={300} />
    </div>
  );
};

export default MovieDetail;