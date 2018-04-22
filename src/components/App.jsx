import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

function App(){
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <style global jsx>{`
        body{
          background-color: green;
          font-family: cursive;
        }
        `}
      </style>
    </div>
  );
}

export default App;
