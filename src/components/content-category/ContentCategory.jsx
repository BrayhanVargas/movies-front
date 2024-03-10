/* eslint-disable react/prop-types */
/**
 * ContentCategory is a component that displays on a slide the list of movies corresponding to the categoryId
 * @param {number} categoryId - Id used to get movies.
 * @returns {JSX.Element} -  JSX representing the ContentCategory.
 */
import { useEffect, useState } from 'react';
import CustomCard from '../cards/CustomCard';
import ListCards from '../list-cards/ListCards';
import { getMoviesbyCategory } from '../../services';

const ContentCategory = ({ categoryId }) => {
  const [movies, setMovies] = useState([]);

  /* This useEffect is  to simulate the life cycle of the component
  in case the data come from some query to the backend */
  useEffect(() => {
    setMovies(getMoviesbyCategory(categoryId));
  }, [categoryId]);

  return (
    <ListCards>
      {movies.map((movie) => (
        <CustomCard
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
