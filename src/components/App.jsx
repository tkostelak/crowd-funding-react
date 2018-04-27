import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './Navbar/Navbar';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Upload from './Upload/Upload';
import Gallery from './Gallery/Gallery';
import Error404 from './Error404/Error404';

function App(){
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/nav' component={NavBar} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/upload' component={Upload} />
        <Route path='/gallery' component={Gallery} />
        <Route component={Error404}/>
      </Switch>
      <style global jsx>{`
        body{
          font-family: monospace;
        }
        `}
      </style>
    </div>
  );
}

export default App;
