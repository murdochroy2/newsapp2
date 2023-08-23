import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/" element={<News key="home" category="general" />}></Route>
              <Route path="/business" element={<News key="business" category="Business" />}></Route>
              <Route path="/entertainment" element={<News key="entertainment" category="Entertainment" />}></Route>
              <Route path="/general" element={<News key="general" category="General" />}></Route>
              <Route path="/health" element={<News key="health" category="Health" />}></Route>
              <Route path="/science" element={<News key="science" category="Science" />}></Route>
              <Route path="/sports" element={<News key="technology" category="Sports" />}></Route>
              <Route path="/technology" element={<News key="sports" category="Technology" />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}


