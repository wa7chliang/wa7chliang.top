import React, { Component } from 'react';
import './style.scss'
import Header from '../../common/header'
import {connect} from 'react-redux'

class Friend extends Component {
  render() {
    const {friendList} = this.props
    return (
      <div className='friend'>
        <Header />
        <div className="friend-tips">
          <p>互链的朋友请讲博客名称、博客地址、头像地址发送到邮箱wa7chliang@163.com！！欢迎各位朋友互链</p>
        </div>
        <ul className='friend-list'>
          {
            friendList.map((item, index) => {
              if(item.images_link === 'none') {
                return (
                  <li key={index}>
                    <a href={item.address_link}>
                      <div className='font-box'>{item.friend_name.slice(0, 2)}</div>
                      <p>{item.friend_name}</p>
                    </a>
                  </li>
                )
              } else {
                return (
                  <li key={index}>
                    <a href={item.address_link}>
                      <img src={item.images_link} alt=""/>
                      <p>{item.friend_name}</p>
                    </a>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friendList: state.friend.friendList
  }
}

export default connect(mapStateToProps, null)(Friend)