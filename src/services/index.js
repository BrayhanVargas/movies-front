/* eslint-disable no-unused-vars */
/**
 * Services layer
 * Try to simulate the behavior in case you make calls to an API.
 * Here should be the logic to handle API services
 */

import { categoryData, dataCategories, dataRealeses } from './data';

export const login = (credentials) => {
  //Here API call to verify credentials
  return true;
};

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
