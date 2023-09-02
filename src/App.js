import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="#f11946" progress={this.state.progress}/><div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/" element={<News setProgress={this.setProgress}  key="home" category="general" />}></Route>
              <Route path="/business" element={<News setProgress={this.setProgress}  key="business" category="Business" />}></Route>
              <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" category="Entertainment" />}></Route>
              <Route path="/general" element={<News setProgress={this.setProgress}  key="general" category="General" />}></Route>
              <Route path="/health" element={<News setProgress={this.setProgress}  key="health" category="Health" />}></Route>
              <Route path="/science" element={<News setProgress={this.setProgress}  key="science" category="Science" />}></Route>
              <Route path="/sports" element={<News setProgress={this.setProgress}  key="technology" category="Sports" />}></Route>
              <Route path="/technology" element={<News setProgress={this.setProgress}  key="sports" category="Technology" />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}


