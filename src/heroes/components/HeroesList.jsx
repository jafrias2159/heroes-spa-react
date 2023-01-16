import React, { useMemo } from 'react';
import { getHeroesBypublisher } from '../../helpers/gerHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
  const heroesList = useMemo(
    () => getHeroesBypublisher(publisher),
    [publisher]
  );

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heroesList.map((heroe) => {
        return <HeroCard key={heroe.id} {...heroe} />;
      })}
    </div>
  );
};
