import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/">
          <p>Nein</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
