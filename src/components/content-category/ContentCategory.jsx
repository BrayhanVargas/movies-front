/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import ListCards from '../list-cards/ListCards';
import { getMoviesbyCategory } from '../../services';

const ContentCategory = ({ categoryId }) => {
  const [movies, setMovies] = useState([]);

  /* This useEffect is  to simulate the life cycle of the component
  in case the data come from some query to the backend */
  useEffect(() => {
    console.log('ct', categoryId);
    setMovies(getMoviesbyCategory(categoryId));
  }, [categoryId]);

  return (
    <ListCards>
      {movies.map((movie) => (
        <Cards
          minWidth={250}
          key={movie.id}
          movieId={movie.id}
          description={movie.description}
          imageUrl={movie.imageUrl}
        />
      ))}
    </ListCards>
  );
};

export default ContentCategory;
