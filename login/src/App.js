import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './componente/Login';
import LogoutButton from './componente/logout';
import Profile from './componente/profile';
import './App.css';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <h1>Bienvenido</h1>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      <Profile />
    </div>
  );
}

export default App;
