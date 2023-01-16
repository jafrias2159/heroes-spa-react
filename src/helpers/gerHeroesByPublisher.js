import { heroes } from '../data/heroes';

export const getHeroesBypublisher = (publisher) => {
  const publisherList = [, 'DC Comics', 'Marvel Comics'];
  if (!publisherList.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
