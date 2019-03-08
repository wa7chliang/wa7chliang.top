import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Index from './pages/index'
import Filed from './pages/filed'
import AboutMe from './pages/aboutMe'
import Friend from './pages/friend'
import './styles/normalize.scss'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Index}></Route>
              <Route path='/filed' exact component={Filed}></Route>
              <Route path='/aboutMe' exact component={AboutMe}></Route>
              <Route path='/friend' exact component={Friend}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
