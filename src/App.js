import React from 'react';
import './components/Styles/style.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CurriculumVitae from './components/CV';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/React-Portfolio" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/curriculumvitae" component={CurriculumVitae} />
        <Route path="/contact" component={Contact} />
        <Main />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;