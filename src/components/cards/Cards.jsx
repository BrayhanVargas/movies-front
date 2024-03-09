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

/* eslint-disable react/prop-types */
const Cards = ({
  description,
  imageUrl,
  handleCardClick,
  movieId,
  minWidth
}) => {
  return (
    <Card sx={{ minWidth: minWidth, margin: '15px' }}>
      <CardActionArea onClick={() => handleCardClick(movieId)}>
        <CardContent>
          <CardMedia
            sx={{ height: 500 }}
            image={imageUrl}
            title="green iguana"
          />
          {/* <img src={imageUrl} alt="Logo" style={slideStyles} /> */}
          <Box sx={{ margin: '15px' }}>
            <Typography variant="h6">{description.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {description.year} - {description.genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.stars}
              <StarIcon fontSize="small" sx={{ color: 'gold' }} />
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
