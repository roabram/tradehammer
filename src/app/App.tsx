import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
