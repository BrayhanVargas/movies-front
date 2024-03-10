/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './HomePage.css';
import ContentCategory from '../../components/content-category/ContentCategory';
import { Typography } from '@mui/material';
import ListCards from '../../components/list-cards/ListCards';
import CustomCard from '../../components/cards/CustomCard';
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

  /**
   * CustomCategory is a banner, in this case we are looking at the latest versions,
   * this component was designed as an external component to a Categories, it could change over time.
   * @param {object} slides - Data used to view last releases.
   * @returns {JSX.Element} -  JSX representing the custom category banner.
   */
  const CustomCategory = ({ slides }) => {
    return (
      <div className="releases">
        <Typography variant="h4">Últimos Lanzamientos</Typography>
        <ListCards>
          {slides.map((slide) => (
            <CustomCard
              key={slide.id}
              imageUrl={slide.imageUrl}
              movieId={slide.id}
              minWidth={700}
              description={slide.description}
            />
          ))}
        </ListCards>
      </div>
    );
  };

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
      <CustomCategory slides={slides} />
      {categories && <Categories categories={categories} />}
    </div>
  );
};

export default HomePage;
