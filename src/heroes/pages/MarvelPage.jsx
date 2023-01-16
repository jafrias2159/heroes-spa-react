import React from 'react';
import { HeroesList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel comics</h1>
      <hr />
      <HeroesList publisher='Marvel Comics' />
    </>
  );
};
