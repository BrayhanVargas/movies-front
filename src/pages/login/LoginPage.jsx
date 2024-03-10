import { useState } from 'react';
import LoginForm from '../../components/forms/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    try {
      // HTTP query to login
      if (login(formData)) {
        e.preventDefault();
        navigate('/home');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
    }
  };

  return (
    <LoginForm
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default LoginPage;
