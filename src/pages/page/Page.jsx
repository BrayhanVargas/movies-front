/* eslint-disable react/prop-types */
import { useMediaQuery } from '@mui/material';
import Menu from '../../components/menu/Menu';
import HomePage from '../home/HomePage';
import './Page.css';

const Page = ({ path }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  console.log('isMobile', isMobile);

  return (
    <div className={isMobile ? 'container-mobile' : 'container-desktop'}>
      <div className={isMobile ? 'menu-mobile' : 'menu-desktop'}>
        <Menu />
      </div>
      <div id="content">{path === '/home' && <HomePage />}</div>
    </div>
  );
};

export default Page;
