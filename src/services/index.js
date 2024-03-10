/* eslint-disable no-unused-vars */
/**
 * Services layer - HTTP queries
 * Try to simulate the behavior in case you make calls to an API.
 * Here should be the logic to handle API services
 */

import {
  dataCategory,
  dataCategories,
  dataRealeses,
  getDataMovie
} from './data';

/**
 * ENDPOINT Login - HTTP POST query
 * Try to simulate the behavior in case you make login
 * Here should be the logic to handle API services with AXIOS or FETCH
 */
export const login = (credentials) => {
  //Here API call to verify credentials
  return true;
};

/**
 * ENDPOINT getCategories - HTTP GET query
 * Try to simulate the behavior when we need categories
 * Here should be the logic to handle API services with AXIOS or FETCH
 */
export const getCategories = () => {
  return dataCategories;
};

/**
 * ENDPOINT getRealeses - HTTP GET query
 * Try to simulate the behavior when we need a custom category (BANNER)
 * Here should be the logic to handle API services with AXIOS or FETCH
 * It is a separate endpoint because it was thought of as a custom component that can change over time,
 * in this case isthe latest releases, it can change to the most popular movies or some promotion or advertisement
 */
export const getRealeses = () => {
  return dataRealeses;
};

/**
 * ENDPOINT getMoviesbyCategory - HTTP GET query
 * Try to simulate the behavior when we need movies by category
 * Here should be the logic to handle API services with AXIOS or FETCH
 */
export const getMoviesbyCategory = (id) => {
  const data = dataCategory.filter((data) => data.categoryId === id)[0];
  return data.movies;
};

/**
 * ENDPOINT getMovie - HTTP GET query
 * Try to simulate the behavior when we need a movie by id (DIALOG)
 * Here should be the logic to handle API services with AXIOS or FETCH
 */
export const getMovie = (movieId) => {
  return getDataMovie(movieId);
};
