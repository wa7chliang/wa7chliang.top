import React, { Component } from 'react';
import './style.scss';
import Header from '../../common/header'
import Footer from '../../common/footer'

class Filed extends Component {
  render() {
    return (
      <div className='filed'>
        <Header />
        <div className="seize-box">
          {
            new Array(5).fill(1).map((item, index) => {
              return (
                <div className="seize-item" key={index}>
                  <div className="seize-title"></div>
                  <div className="seize-content">
                    <div className="seize-title w100"></div>
                    <div className="seize-title w40"></div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Footer />
      </div>
    )
  }

}

export default Filed;
