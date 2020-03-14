import React from 'react';
import Router from './router'
import { UserProvider } from './context/userContext'
import Nav from './components/Nav'
import './App.scss';

const App = props => {
  return (
    <UserProvider>
      <div className="app">
        <Router />
      </div>
    </UserProvider>
  );
}

export default App;
