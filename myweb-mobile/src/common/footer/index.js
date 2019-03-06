import React, { Component } from 'react';
import './style.scss'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>本博客已经运行{this.getDay.bind(this)()}天</p>
        <p>@2019  粤ICP备18069281号</p>
    </div>
    )
  }
  getDay () {
    let birTime = new Date('2018/6/29').getTime()
    let nowTime = new Date().getTime()
    return Math.ceil((nowTime - birTime) / 1000 / 60 / 60 / 24)
  }
}

export default Footer