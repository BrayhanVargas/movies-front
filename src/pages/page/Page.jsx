/* eslint-disable react/prop-types */
import { useMediaQuery } from '@mui/material';
import Menu from '../../components/menu/Menu';
import HomePage from '../home/HomePage';
import './Page.css';
import ProfilePage from '../profile/Profile';
import SavedPage from '../saved/Saved';

const Page = ({ path }) => {
  const isMobile = useMediaQuery('(max-width: 1250px)');

  const View = ({ path }) => {
    if (path === '/home') return <HomePage />;
    if (path === '/profile') return <ProfilePage />;
    if (path === '/saved') return <SavedPage />;
  };

  return (
    <div className={isMobile ? 'container-mobile' : 'container-desktop'}>
      <div className={isMobile ? 'menu-mobile' : 'menu-desktop'}>
        <Menu />
      </div>
      <div id="content">
        <View path={path} />
      </div>
    </div>
  );
};

export default Page;
