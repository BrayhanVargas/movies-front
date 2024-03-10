import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './Card.css';
import CustomizedDialogs from '../dialog/Dialog';
import { useState } from 'react';

/* eslint-disable react/prop-types */
const CustomCard = ({ description, imageUrl, movieId, minWidth }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Stars = ({ n }) => {
    const starArray = Array.from({ length: n });
    return (
      <>
        {starArray.map((_, index) => (
          <StarIcon key={index} fontSize="small" sx={{ color: 'gold' }} />
        ))}
      </>
    );
  };

  return (
    <Card sx={{ minWidth: minWidth, margin: '15px' }}>
      <CardActionArea onClick={() => handleClickOpen(movieId)}>
        <CardContent>
          <CardMedia sx={{ height: 500 }} image={imageUrl} />
          <Box sx={{ margin: '15px' }}>
            <Typography variant="h6">{description.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {description.year} - {description.genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Stars n={description.stars} />
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CustomizedDialogs open={open} handleClose={handleClose} />
    </Card>
  );
};

export default CustomCard;
