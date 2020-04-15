import React from 'react';
import {HashRouter,Route,Switch,} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Art from './pages/art';

const App=props => (
  <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <Route path='/home' component={Home} ></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/art' component={Art}></Route>
      <Route path='/' component={Home} ></Route>
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
