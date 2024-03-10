import { useNavigate } from 'react-router-dom';
import './Menu.css';
import { IconButton, Typography } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import useMediaQuery from '@mui/material/useMediaQuery';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const Menu = () => {
  const isMobile = useMediaQuery('(max-width: 1250px)');
  console.log(isMobile);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <>
      {!isMobile ? (
        <div className="menu-container">
          <div>
            <div className="menu-logo">
              <Typography className="icon-btn--txt" variant="h5">
                Movies App
              </Typography>
            </div>
            <div>
              <IconButton type="button" onClick={() => navigate('/home')}>
                <HomeIcon fontSize="large" className="icon-btn" />
                <Typography className="icon-btn--txt">Inicio</Typography>
              </IconButton>
              <IconButton type="button" onClick={() => navigate('/saved')}>
                <BookmarksIcon fontSize="large" className="icon-btn" />
                <Typography className="icon-btn--txt">Guardadas</Typography>
              </IconButton>
              <IconButton type="button" onClick={() => navigate('/profile')}>
                <Person2Icon fontSize="large" className="icon-btn" />
                <Typography className="icon-btn--txt">Perfil</Typography>
              </IconButton>
            </div>
          </div>
          <div>
            <IconButton type="button" onClick={() => handleLogout()}>
              <LogoutIcon fontSize="large" className="icon-btn" />
              <Typography className="icon-btn--txt">Cerrar Sesion</Typography>
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="menu-container--mobile">
          <SupportIcon
            fontSize="large"
            sx={{ marginBottom: '20px', paddingTop: '20px' }}
          />
          <IconButton
            type="button"
            onClick={() => handleLogout()}
            variant="contained"
          >
            <HomeIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            type="button"
            onClick={() => handleLogout()}
            variant="contained"
          >
            <LogoutIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
        </div>
      )}
    </>
  );
};

export default Menu;
