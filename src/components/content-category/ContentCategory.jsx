/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import ListCards from '../list-cards/ListCards';

const categoryData = [
  {
    id: 1,
    name: 'Spiderman',
    imageUrl:
      'https://wallpapers.com/images/high/spiderman-1366x768-dnkwrtg111y9d8hu.webp'
  },
  {
    id: 2,
    name: 'Superman',
    imageUrl:
      'https://wallpapers.com/images/high/image-man-of-steel-wallpaper-superman-34759958-1280-dc-ywtl7gk6azox6l96.webp'
  },
  {
    id: 3,
    name: 'Iron Man 1',
    imageUrl:
      'https://wallpapers.com/images/hd/iron-man-repulser-87jqqc12bkvqa38a.webp'
  },
  {
    id: 4,
    name: 'Capitan America',
    imageUrl:
      'https://wallpapers.com/images/high/captain-america-android-2560-x-1600-ke1dn4ni9e9lorxq.webp'
  },
  {
    id: 5,
    name: 'Spiderman 2',
    imageUrl:
      'https://wallpapers.com/images/high/black-spiderman-tobey-maguire-ixu2s8zl68o17tma.webp'
  }
];

const ContentCategory = ({ handleCardClick }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(categoryData);
  }, []);
  return (
    <ListCards>
      {movies.map((movie) => (
        <Cards
          minWidth={250}
          key={movie.id}
          movieId={movie.id}
          description={'testDescription'}
          imageUrl={movie.imageUrl}
          handleCardClick={handleCardClick}
        />
      ))}
    </ListCards>
  );
};

export default ContentCategory;
