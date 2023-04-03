import Image from 'next/image';
import React from 'react';
import axios from "axios";

let res = {};

const MovieDetail = async ({ params }) => {
  const { movieId } = params

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/get/basic',
    params: {country: 'us', imdb_id: movieId},
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  
  await axios.request(options).then(function (response) {
    res = response.data.result
    console.log(response);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div>
      <div>
        <h2 className='text-2xl'>{res.title}</h2>
        <h2 className='text-lg'>{res.year}</h2>
        <Image
          className='my-12 w-72'
          alt='poster'
          src={`https://img.freepik.com/free-photo/real-life-cancer-zodiac-sign_23-2149627244.jpg`}
          width={1000}
          height={1000}
          property
        />
        {/* <Image alt='poster' src={`https://image.tmdb.org/t/p/original${res.posterPath}`} width={300} height={300} /> */}
      </div>
    </div>

  );
};

export default MovieDetail;