import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }
  toggle = ()=> {
    this.setState({isOn: !this.state.isOn})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Priolist</h1>
        </header>
        <p className="App-intro">
          Know your priority.
          <MyComponent />
          <MyComponent2 name = "Ashish"/>
        </p>
        <button onClick= {this.toggle}>
          {this.state.isOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default App;
