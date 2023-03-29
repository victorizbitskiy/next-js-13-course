import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Movie = ({ id, title, poster_path = "" }) => {
  return (
    <div>
      <Link href={`/${id}`}>
        <h1>{title}</h1>
        <Image alt='poster' src={poster_path} width={300} height={300} />
      </Link>
    </div>
  );
};

export default Movie;