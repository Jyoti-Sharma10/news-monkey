import './App.css';
import Header from './components/Header';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <News/>
      </div>
    )
  }
}


