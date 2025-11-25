import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user'); // Check LocalStorage
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;