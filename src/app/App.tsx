import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Heading from './components/Heading/Heading';
import FooterNav from './components/FooterNav/FooterNav';
import Landingpage from './pages/Landingpage/Landingpage';

function App(): JSX.Element {
  const location = useLocation().pathname;
  return (
    <>
      {location !== '/' && <Heading />}
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      {location !== '/' && <FooterNav />}
    </>
  );
}

export default App;
