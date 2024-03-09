import { Form } from 'react-router-dom';
import './LoginForm.css';
import { Button, TextField } from '@mui/material';

/* eslint-disable react/prop-types */
const LoginForm = ({ handleChange, handleSubmit, formData }) => {
  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          className="input-login"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          color="primary"
          focused
        />
        <TextField
          label="Contraseña"
          className="input-login"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          color="primary"
          focused
        />
        <Button
          type="submit"
          variant="contained"
          disabled={!formData.email || !formData.password}
        >
          Iniciar sesión
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
