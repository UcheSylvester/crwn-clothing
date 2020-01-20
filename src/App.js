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

const Topics = (props) => {
  console.log(props)
  return (
    <div>
      <Link to={`${props.match.url}/13`}>Topic 13</Link>
      <Link to={`${props.match.url}/15`}>Topic 15</Link>
      <Link to={`${props.match.url}/18`}>Topic 18</Link>

      <h1>TOPICS PAGE</h1>
    </div>
  )
}

const TopicsDetails = (props) => {
  console.log(props)
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>TOPIC DETAIL PAGE : {props.match.params.topicId} </h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}

      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch> */}

      <Route exact path="/" component={HatsPage} />
      <Route exact path="/topics" component={Topics} />
      <Route path="/topics/:topicId" component={TopicsDetails} />

    </div>
  );
}

export default App;
