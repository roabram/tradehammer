import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import './App.modules.css';
import Heading from './components/Heading/Heading';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Heading />
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
