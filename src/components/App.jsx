import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Navbar from './Navbar/Navbar';
import Browse from './Browse/Browse';
import Funding from './Funding/Funding';
import Error404 from './Error404/Error404';
import About from './About/About';

function App(){
  return (
    <div className="container">
      <Navbar/> 
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/browse' component={Browse} />
        <Route path='/about' component={About} />
        <Route path='/funding' component={Funding} />
        <Route component={Error404}/>
      </Switch>
      <style global jsx>{`
      .container{
        margin-right: 95%
        margin-left: 95%
      }  
      body{
          font-family: monospace;
        }
        `}
      </style>
    </div>
  );
}

export default App;
