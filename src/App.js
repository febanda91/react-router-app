import React from 'react';
import './App.css';
import Shop from './Shop'
import About from './About'
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
   <div>
     <Nav/>
     <About/>
     <Shop/>
   </div>
   </Router>
  );
}

export default App;
