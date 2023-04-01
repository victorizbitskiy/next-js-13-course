import Image from 'next/image';
import React from 'react';
import axios from "axios";

let res = {};

const MovieDetail = async ({ params }) => {
  const { movieId } = params

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/get/basic',
    params: { country: 'us', imdb_id: {movieId} },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
   res = response
   console.log(response);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div>
      <div>{res.title}</div>
      <Image alt='poster' src={`https://image.tmdb.org/t/p/original${res.posterPath}`} width={300} height={300} />
    </div>
  );
};

export default MovieDetail;