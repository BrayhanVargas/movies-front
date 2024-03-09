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
    }
  },
  palette: {
    primary: {
      main: '#8d4229'
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/home',
    element: <Page path="/home" />
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
