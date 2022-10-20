import { Navigate } from 'react-router';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const handleNavigation = (route) => {
  if (localStorage.getItem('token').length > 1)
    return <Navigate to={route} replace={true} />;
};
