import { useEffect, useState } from 'react';
import './HomePage.css';
import ContentCategory from '../../components/content-category/ContentCategory';
import { Typography } from '@mui/material';
import ListCards from '../../components/list-cards/ListCards';
import Cards from '../../components/cards/Cards';
import { getCategories, getRealeses } from '../../services';

const HomePage = () => {
  const [slides, setSlides] = useState([]);
  const [categories, setCategories] = useState([]);

  /* This useEffect is  to simulate the life cycle of the component
  in case the data come from some query to the backend */
  useEffect(() => {
    setSlides(getRealeses);
    setCategories(getCategories);
  }, []);

  const Categories = ({ categories }) => {
    return categories.map((category) => (
      <div key={category.id} className="category">
        <Typography variant="h5">{category.category}</Typography>
        <ContentCategory categoryId={category.id} />
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="releases">
        <Typography variant="h4">Nuevos Estrenos</Typography>
        <ListCards>
          {slides.map((slide) => (
            <Cards
              key={slide.id}
              imageUrl={slide.imageUrl}
              movieId={slide.id}
              minWidth={700}
              description={slide.description}
            />
          ))}
        </ListCards>
      </div>
      {categories && <Categories categories={categories} />}
    </div>
  );
};

export default HomePage;
