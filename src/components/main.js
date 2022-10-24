import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CurriculumVitae from './CV';
import Projects from './Projects';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/React-Portfolio" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/curriculumvitae" component={CurriculumVitae} />
    <Route path="/contact" component={Contact} />
  </Switch>

)

export default Main;