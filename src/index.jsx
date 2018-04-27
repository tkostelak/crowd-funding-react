import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>

        <Component/>

      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
