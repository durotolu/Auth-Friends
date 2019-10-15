import React, { Redirect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/friends' render={props => withAthCheck(Friends, props)} />
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />;
}

export default App;
