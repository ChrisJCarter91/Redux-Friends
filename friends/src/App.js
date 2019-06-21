import React from 'react';
import { Route } from 'react-router-dom';
import LoginScreen from './views/LoginScreen';
import FriendsListPage from './views/FriendsListScreen';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Chris' Redux Friends</h1>
      <Route exact path='/' component={LoginScreen} />
      <Route path='/friends-list' component={FriendsListPage} />
    </div>
  );
}

export default App;
