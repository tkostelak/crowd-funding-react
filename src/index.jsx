import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

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

//Google font imports
WebFont.load({
  google: {
    families: ['Amatic SC', 'cursive']
  }
})

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
