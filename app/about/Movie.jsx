import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Movie = ({ id, title, poster_path = "" }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link href={`/${id}`}>
        <Image alt='poster' src={poster_path} width={300} height={300} />
      </Link>
    </div>
  );
};

export default Movie;