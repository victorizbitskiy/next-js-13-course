import Image from 'next/image';
import React from 'react';

const Movie = ({ title, poster_path = "" }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Image alt='poster' src={poster_path} width={100} height={100} />
      </div>
    </div>
  );
};

export default Movie;