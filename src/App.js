import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  reset() {
    alert("are you sure to reset??? ");
    this.setState({
      count: 0
    });
  };

  
  render() {
    return (

   <div>
   <button className="inc" onClick={(e) => this.increment(e)}>Increment</button>
    <button className="reset" onClick={(e) => this.reset(e)}>Reset</button>
    <h1 className= "visitors">Visitors</h1>
    <p className= "count">{this.state.count}</p>
  </div>
    );
  }
};
export default App;
