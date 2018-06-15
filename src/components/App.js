import React from 'react';

import logo from '../logo.svg';
import './App.css';
//import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do-List</h1>
        </header>
        <div>
        </div>            
      </div>
    );
  }
}

export default App;
