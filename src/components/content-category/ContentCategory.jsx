/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import ListCards from '../list-cards/ListCards';

const categoryData = [
  {
    id: 1,
    imageUrl:
      'https://wallpapers.com/images/high/spiderman-1366x768-dnkwrtg111y9d8hu.webp',
    description: {
      name: 'Spiderman',
      year: '2017',
      genre: 'Action',
      stars: '5'
    }
  },
  {
    id: 2,
    imageUrl:
      'https://wallpapers.com/images/high/image-man-of-steel-wallpaper-superman-34759958-1280-dc-ywtl7gk6azox6l96.webp',
    description: {
      name: 'Superman',
      year: '2007',
      genre: 'Action',
      stars: '4'
    }
  },
  {
    id: 3,
    imageUrl:
      'https://wallpapers.com/images/hd/iron-man-repulser-87jqqc12bkvqa38a.webp',
    description: {
      name: 'Iron Man 1',
      year: '2018',
      genre: 'Action',
      stars: '5'
    }
  },
  {
    id: 4,
    imageUrl:
      'https://wallpapers.com/images/high/captain-america-android-2560-x-1600-ke1dn4ni9e9lorxq.webp',
    description: {
      name: 'Capitan America',
      year: '2012',
      genre: 'Action',
      stars: '2'
    }
  },
  {
    id: 5,
    imageUrl:
      'https://wallpapers.com/images/high/black-spiderman-tobey-maguire-ixu2s8zl68o17tma.webp',
    description: {
      name: 'Spiderman 2',
      year: '2012',
      genre: 'Action',
      stars: '3'
    }
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
          description={movie.description}
          imageUrl={movie.imageUrl}
          handleCardClick={handleCardClick}
        />
      ))}
    </ListCards>
  );
};

export default ContentCategory;
