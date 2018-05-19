
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListComponent';
//import SampleComponent from './SampleComponent';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  
onChange = (event) => {
  this.setState({term: event.target.value});
}

onSubmit = (event) => {
  event.preventDefault()
  this.setState({
    term: '',
    items: [...this.state.items, this.state.term]
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Priolist</h1>
          
        </header>
        <div className="App-intro">
          {/* <SampleComponent /> */}
          <form className="App" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} />
              <button>Submit</button>
          </form>
          <ListItems items={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default App;
