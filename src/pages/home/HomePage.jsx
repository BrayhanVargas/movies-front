import { useEffect, useState } from 'react';
import './HomePage.css';
import ContentCategory from '../../components/content-category/ContentCategory';
import { Typography } from '@mui/material';
import ListCards from '../../components/list-cards/ListCards';
import Cards from '../../components/cards/Cards';
import CustomizedDialogs from '../../components/dialog/Dialog';

const dataSlides = [
  {
    id: 10,
    imageUrl:
      'https://wallpapers.com/images/featured-full/avengers-vm16xv4a69smdauy.jpg',
    name: 'Avengers'
  },
  {
    id: 11,
    imageUrl:
      'https://wallpapers.com/images/high/spiderman-black-and-red-i1i2nmcafdcevpen.webp',
    name: 'Spiderman'
  },
  {
    id: 12,
    imageUrl:
      'https://wallpapers.com/images/high/the-100-television-series-p389841deayu6ky2.webp',
    name: 'The 100'
  }
];

const dataCategories = [
  {
    id: 1,
    category: 'Recomendadas para ti'
  },
  {
    id: 2,
    category: 'Seguir viendo'
  },
  {
    id: 3,
    category: 'Documentales'
  },
  {
    id: 4,
    category: 'Terror'
  },
  {
    id: 5,
    category: 'Anime'
  }
];

const HomePage = () => {
  const [slides, setSlides] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  /* This useEffect is  to simulate the life cycle of the component
  in case the images come from some query to the backend */
  useEffect(() => {
    setSlides(dataSlides);
    setCategories(dataCategories);
  }, []);

  const handleCardClick = (id) => {
    setOpen(true);
    console.log(id);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Categories = ({ categories, handleCardClick }) => {
    return categories.map((category) => (
      <div key={category.id} className="category">
        <Typography variant="h5">{category.category}</Typography>
        <ContentCategory handleCardClick={handleCardClick} />
      </div>
    ));
  };

  return (
    <div className="container">
      {/* {slides.length && <ImageSlider slides={slides} />} */}
      <div>
        <Typography variant="h4">Nuevos Estrenos</Typography>
        <ListCards>
          {slides.map((slide) => (
            <Cards
              key={slide.id}
              imageUrl={slide.imageUrl}
              movieId={slide.id}
              minWidth={700}
              handleCardClick={handleCardClick}
            />
          ))}
        </ListCards>
      </div>
      {categories && (
        <Categories
          categories={categories}
          handleCardClick={handleCardClick}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
      <CustomizedDialogs open={open} handleClose={handleClose} />
    </div>
  );
};

export default HomePage;
