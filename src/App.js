import React, { Component } from 'react';
import Dashboard from './component/Dashboard';
import Wizard from './component/Wizard';
import Header from './component/Header';
import routes from './routes';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />
      
      {routes}

      </div>
    );
  }
}

export default App;
