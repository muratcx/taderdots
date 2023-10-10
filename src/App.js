import React from 'react';
import {HashRouter,Route,Switch,} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Art from './pages/art';

const App=props => (
  <HashRouter>
    <Switch>
      <Route exact path='/home' component={Home} ></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/art' component={Art}></Route>
      <Route exact path='/' component={Home} ></Route>
    </Switch>
  </HashRouter>
);

//
//
//font-family: 'Suez One', serif;
//font-family: 'Domine', serif;
//font-family: 'Cinzel', serif;
//
//
export default App;
