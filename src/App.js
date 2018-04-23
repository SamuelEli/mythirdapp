import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel} from './images'
import {imgUrls} from './images'
// import {DataCapture} from './DataCapture'
class App extends Component {
  render() {
    console.log('');
    return (
      <div className="App">
      <Carousel/>
      </div>
    );
  }
}
export default App;
