import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={() => { props.history.push('/topics') }}>Topics</button>
      <h1>HATS PAGE</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
