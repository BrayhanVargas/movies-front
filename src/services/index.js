/**
 * Services layer
 * Try to simulate the behavior in case you make calls to an API.
 */

import { categoryData, dataCategories, dataRealeses } from './data';

export const login = () => {};

export const getCategories = () => {
  return dataCategories;
};

export const getRealeses = () => {
  return dataRealeses;
};

export const getMoviesbyCategory = (id) => {
  const data = categoryData.filter((data) => data.categoryId === id)[0];
  return data.movies;
};
