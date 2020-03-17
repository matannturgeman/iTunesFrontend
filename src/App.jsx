import React from 'react';
import Router from './router'
import { UserProvider } from './context/userContext'
import './App.scss';

const App = props => (
  <UserProvider>
    <div className="app">
      <Router />
    </div>
  </UserProvider>
);


export default App;
