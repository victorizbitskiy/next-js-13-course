"use client"

import React from 'react';

const Error = ({error, reset}) => {
  return (
    <div>
      This ain't loading up: {error.message}
      <button onClick={() => reset()}></button>
    </div>
  );
};

export default Error;