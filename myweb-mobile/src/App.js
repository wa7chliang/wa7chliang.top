import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Index from './pages/index'
import Filed from './pages/filed'
import './normalize.scss'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Index}></Route>
            <Route path='/filed' exact component={Filed}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
