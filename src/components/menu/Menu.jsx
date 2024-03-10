import { useNavigate } from 'react-router-dom';
import './Menu.css';
import { IconButton, Typography } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import useMediaQuery from '@mui/material/useMediaQuery';

const Menu = () => {
  const isMobile = useMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <>
      {isMobile ? (
        <div className="menu-container">
          <SupportIcon
            fontSize="large"
            sx={{ marginBottom: '20px', paddingTop: '20px' }}
          />
          <div className="menu-links">
            <div>
              <IconButton
                type="button"
                onClick={() => handleLogout()}
                variant="contained"
              >
                <HomeIcon fontSize="large" />
                <Typography>Inicio</Typography>
              </IconButton>
              <IconButton
                type="button"
                onClick={() => handleLogout()}
                variant="contained"
              >
                <Person2Icon fontSize="large" />
                <Typography>Guardadas</Typography>
              </IconButton>
              <IconButton
                type="button"
                onClick={() => handleLogout()}
                variant="contained"
              >
                <Person2Icon fontSize="large" />
                <Typography>Perfil</Typography>
              </IconButton>
            </div>
            <IconButton
              type="button"
              onClick={() => handleLogout()}
              variant="contained"
            >
              <LogoutIcon fontSize="large" />
              <Typography>Cerrar Sesion</Typography>
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
