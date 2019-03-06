import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Index from './pages/index'
import Filed from './pages/filed'
import AboutMe from './pages/aboutMe'
import './normalize.scss'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Index}></Route>
            <Route path='/filed' exact component={Filed}></Route>
            <Route path='/aboutMe' exact component={AboutMe}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
