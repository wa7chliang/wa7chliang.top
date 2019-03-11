import React, { Component } from 'react';
import {Route, HashRouter} from 'react-router-dom'
import Index from './pages/index'
import Filed from './pages/filed'
import AboutMe from './pages/aboutMe'
import Friend from './pages/friend'
import Detail from './pages/detail'
import './styles/normalize.scss'
import {Provider} from 'react-redux'
import store from './store'
import {ua} from './assets/js/util'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HashRouter>
            <div>
              <Route path='/' exact component={Index}></Route>
              <Route path='/filed' exact component={Filed}></Route>
              <Route path='/aboutMe' exact component={AboutMe}></Route>
              <Route path='/friend' exact component={Friend}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </HashRouter>
        </div>
      </Provider>
    );
  }

  componentDidMount () {
    if (!ua.isAndroid && !ua.isIOS) {
      window.location.replace('http://wa7chliang.top')
    }
  }
}

export default App;
