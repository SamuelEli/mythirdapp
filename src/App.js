import React, { Component } from 'react';
import {LikeButton } from './buttonlike'
import logo from './logo.svg';
import './App.css';
import {Carousel} from './images'
import {imgUrls} from './images'
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
