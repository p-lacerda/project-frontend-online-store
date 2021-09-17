import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Switchers from './Switchers';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switchers />
      </BrowserRouter>
    );
  }
}

export default App;
