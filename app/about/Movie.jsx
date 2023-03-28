import Image from 'next/image';
import React from 'react';

const Movie = ({ title, poster_path = "" }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Image alt='poster' src={poster_path} width={300} height={300} />
      </div>
    </div>
  );
};

export default Movie;