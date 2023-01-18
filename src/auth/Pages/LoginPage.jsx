import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onLogin = () => {
    const lastPage = localStorage.getItem('lastPage') || '/';
    login('Jorge Frias');
    navigate(lastPage, {
      replace: true,
    });
  };
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={onLogin}>
        login
      </button>
    </div>
  );
};

export default LoginPage;
