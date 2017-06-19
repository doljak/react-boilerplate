import React, { Component } from 'react';

export default class App extends Component {
  sum(a,b){
    return a+b
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit the files at _src
        </p>
      </div>
    );
  }
}
