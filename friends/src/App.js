import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Route path='/login' component={Form} />
    </div>
  );
}

export default App;
