import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Landingpage from './landing-page/landing-page'
import GoldenDNALandingPage from './GoldenDnaPages/GoldenDNALandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import footer from './footer/footer';

function App() {
  return (
    <div className="App">
  <Router>

      <Switch>
        <Route path="/" exact component={Landingpage}/>
        <Route path="/golden-dna-home" component={GoldenDNALandingPage}/>
      </Switch>
  </Router>
      
    </div>
    
  );
}

export default App;
