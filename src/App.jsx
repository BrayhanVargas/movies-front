import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Page from './pages/page/Page';
import LoginPage from './pages/login/LoginPage';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '30px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0px'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'white',
          justifyContent: 'flex-start'
        }
      }
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  //TODO: create routes privates
  {
    path: '/home',
    element: <Page path="/home" />
  },
  {
    path: '/saved',
    element: <Page path="/saved" />
  },
  {
    path: '/profile',
    element: <Page path="/profile" />
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
