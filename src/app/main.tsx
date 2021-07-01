import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
// import App from './App';
import './globals.css';
import Landingpage from './pages/Landingpage/Landingpage';

ReactDOM.render(
  <BrowserRouter>
    <Route>
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/App" component={App} />
    </Route>
  </BrowserRouter>,
  document.querySelector('#root')
);
