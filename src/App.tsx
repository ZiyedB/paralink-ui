import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import BaseLayout from './components/layouts/BaseLayout';
import Ipfs from './pages/ipfs/Ipfs';
import IpfsList from './pages/ipfs/IpfsList';
import Login from './pages/Login/Login';
import { ProtectedRoute } from './shared/ProtectedRoute';

function App(): JSX.Element {
  // TODO: still need to handle the first time getting to site ( if token still valid, present etc. )
  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/ipfs/:hash" component={Ipfs} />
          <ProtectedRoute path={['/', '/ipfs']} component={IpfsList} />
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default App;
