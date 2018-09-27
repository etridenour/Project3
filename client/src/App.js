import React, { Component } from 'react';


class App extends Component {

  componentWillMount() {
    fetch('/test')
    .then(response => response.json())
    .then(response => console.log(response))
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
