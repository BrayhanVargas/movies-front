import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

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
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              className="description"
            >
              Titulo
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="description"
            >
              Anio - genero
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="description"
            >
              Stars
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
