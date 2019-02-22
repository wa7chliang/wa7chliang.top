import React, { Component } from 'react';
import './index.scss'

class Index extends Component {
  render() {
    return (
      <div className="index">
        <div className="img-box">
          <div className="img-border">
            <div className="img-line"></div>
          </div>
          <div className='img'>
            <img src='https://avatars3.githubusercontent.com/u/26890547?s=460&v=4' alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
