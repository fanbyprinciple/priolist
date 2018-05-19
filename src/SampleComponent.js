import React, {Component} from 'react';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import './App.css';

class SampleComponent extends Component {
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

export default SampleComponent;