import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Painter, MostFamous, Paints, Paint } from './Lb';
import { CityInfo, FamousInCity, Other, Photos } from './Dz';


<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Link to="/lb/painter">Painter</Link><br></br>
      <Link to="/lb/mostFamous">Famous</Link><br></br>
      <Link to="/lb/paints">Paints</Link><br></br>
      <Link to="/lb/paints/3">Paint 3</Link><br></br>
      <br></br>
      <Link to="/dz/cityInfo">City info</Link><br></br>
      <Link to="/dz/mostFamous">Famous</Link><br></br>
      <Link to="/dz/other">Other</Link><br></br>
      <Link to="/dz/photos">Photos</Link><br></br>
      <Link to="/dz/other/2">Other 2</Link><br></br>
      <br></br>
      <Switch>
        <Route path="/lb/painter" component={Painter}/>
        <Route path="/lb/mostFamous" component={MostFamous}/>
        <Route path="/lb/paints/:id" component={Paint}/>
        <Route exact path="/lb/paints" component={Paints}/>

        <Route path='/dz/cityInfo' component={CityInfo}/>
        <Route path='/dz/mostFamous' component={FamousInCity}/>
        <Route exact path='/dz/other' component={Other}/>
        <Route path='/dz/photos' component={Photos}/>
        <Route path='/dz/other/:id' component={Other}/>
      </Switch>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
