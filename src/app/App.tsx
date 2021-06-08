import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/help">
          <p>Help</p>
        </Route>
        <Route exact path="/">
          <p>Nein</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
