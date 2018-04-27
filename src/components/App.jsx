import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './Navbar/Navbar';
import Login from './Login/Login';

function App(){
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/nav' component={NavBar} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <style global jsx>{`
        body{
          font-family: cursive;
        }
        `}
      </style>
    </div>
  );
}

export default App;
