import React, { Component } from 'react';
import { RRWAEngine } from 'react-redux-webaudio';
import WAApp from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RRWAEngine />
        <WAApp />
      </div>
    );
  }
}

export default App;
