import React from 'react';
import './App.css';
import Landingpage from './landing-page/landing-page';
import GoldenDNALandingPage from './GoldenDnaPages/GoldenDNALandingPage';
import OverheadStudiosLandingPage from './OverheadStudiosPages/OverheadStudiosLandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
  <Router>

      <Switch>
        <Route path="/" exact component={Landingpage}/>
        <Route path="/golden-dna-home" component={GoldenDNALandingPage}/>
        <Route path="/overhead-studios" component={OverheadStudiosLandingPage}/>
      </Switch>

  </Router>
      
    </div>
    
  );
}

export default App;
