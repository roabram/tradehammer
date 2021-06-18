import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Button from './components/Button/Button';
import CandleStickChart from './components/CandleStickChart/CandleStickChart';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/help">
          <p>Help</p>
        </Route>
        <Route exact path="/">
          <p>Nein</p>
          <Button onClick={() => alert('hi')}>Nicht Hallo</Button>
          <CandleStickChart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
