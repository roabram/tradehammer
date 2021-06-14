import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Button from './components/Button/Button';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/help">
          <p>Help</p>
        </Route>
        <Route exact path="/">
          <p>Nein</p>
          <Button onClick={() => alert('hi')}>Hallo</Button>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
