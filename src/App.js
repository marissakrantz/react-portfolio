import React, { Component } from 'react';
import './components/Styles/style.css';
import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
          <html>
            <Header />
            <body>
              <Main />
              <Footer />
            </body>
          </html>
    );
  }
}

export default App;