import React, { Component } from 'react';
import "./App.css"
import MyRouter from './router/router'

class App extends Component {
  render() {
    return (
      <div className="app">
        <MyRouter></MyRouter>
      </div>
    );
  }
}

export default App;