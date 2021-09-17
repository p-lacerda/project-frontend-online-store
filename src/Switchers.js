import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

class Switchers extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    );
  }
}

export default Switchers;
