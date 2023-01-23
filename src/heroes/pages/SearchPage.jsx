import React from 'react';
import queryString from 'query-string';

import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../../helpers/getHeroesByName';

export const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { q = '' } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({ searchText: q });

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onFormSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onFormSubmit}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              onChange={onInputChange}
              value={searchText}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <div
            className='alert alert-primary aimate_animated animate_fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            className='alert alert-danger animate_animated animate_fadeIn'
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{q}</b>
          </div>
          {heroes.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </div>
  );
};
