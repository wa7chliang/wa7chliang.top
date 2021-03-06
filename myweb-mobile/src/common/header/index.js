import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false
    }
    this.setOpenMenu = this.setOpenMenu.bind(this)
  }
  render() {
    return (
      <div className={this.state.openMenu? 'filed-header filed-header-active ignorefh36px': 'filed-header filed-header-active'}>
        <div className='filed-icon'>
          <svg
            onClick={this.setOpenMenu}
            className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1441"><path d="M332.6 468.9h582c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8h-582c-24.7 0-44.8-20-44.8-44.8 0-24.7 20-44.8 44.8-44.8zM108.7 468.9h44.8c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8h-44.8c-24.7 0-44.8-20-44.8-44.8 0.1-24.7 20.1-44.8 44.8-44.8zM108.7 737.5h805.8c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8H108.7C84 827.1 64 807 64 782.3c0-24.7 20-44.8 44.7-44.8zM108.7 200.3h805.8c24.7 0 44.8 20 44.8 44.8 0 24.7-20 44.8-44.8 44.8H108.7c-24.7 0-44.8-20-44.8-44.8 0.1-24.7 20.1-44.8 44.8-44.8z" fill="" p-id="1442"></path></svg>
        </div>
        <div className='filed-header-item-box'>
          <div className="item">
            <Link to='/'>首页</Link>
          </div>
          <div className="item">
            <Link to='/filed'>归档</Link>
          </div>
          <div className="item">
            <Link to='/friend'>友链</Link>
          </div>
          <div className="item">
            <Link to='/aboutMe'>抓住我</Link>
          </div>
        </div>
      </div>
    )
  }
  setOpenMenu () {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }
}

export default Header;
