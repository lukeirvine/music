import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage2 from './components/pages/homepage2/Homepage2';
import Portfolio from './components/pages/portfolio/Portfolio';
import Lessons from './components/pages/lessons/Lessons';
import Contact from './components/pages/contact/Contact';
import Error from "./components/pages/error/Error";

const App = () => {
  return (
    <HashRouter>
          <Switch>
              <Route path="/" component={Homepage2} exact/>
              <Route path="/apps" component={Portfolio} exact/>
              <Route path="/portfolio" component={Portfolio} exact/>
              <Route path="/lessons" component={Lessons} exact/>
              <Route path="/contact" component={Contact} exact/>
              <Route render={(props) => <Error {...props}/>}/>
          </Switch>
    </HashRouter>
  );
}

export default App;
