import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
      <div>
      <Routes>
        <Route exact path='/' Component={() => <News pageSize={6} country="in" category='general' />} />
        <Route exact path='/general' Component={() => <News pageSize={6} country="in" category='general' />} />
        <Route exact path='/business' Component={() => <News pageSize={6} country="in" category='business' />} />
        <Route exact path='/entertainment' Component={() => <News pageSize={6} country="in" category='entertainment' />} />
        <Route exact path='/health' Component={() => <News pageSize={6} country="in" category='health' />} />
        <Route exact path='/science' Component={() => <News pageSize={6} country="in" category='science' />} />
        <Route exact path='/sports' Component={() => <News pageSize={6} country="in" category='sports' />} />
        <Route exact path='/technology' Component={() => <News pageSize={6} country="in" category='technology' />} />
        </Routes>
      </div>
      </Router>
    );
  }
}
