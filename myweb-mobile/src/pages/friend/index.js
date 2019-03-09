import React, { Component } from 'react';
import './style.scss'
import Header from '../../common/header'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'

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
              return (
                <li key={index}>
                  <a href={item.address_link.indexOf('http') >= 0? item.address_link: `http://${item.address_link}`}>
                    {
                      item.images_link === 'none'? 
                        <div className='font-box'>{item.friend_name.slice(0, 2)}</div> :
                        <img src={item.images_link} alt=""/>
                    }
                    <p>{item.friend_name}</p>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.getFriendList()
  }
}

const mapStateToProps = (state) => {
  return {
    friendList: state.friend.friendList
  }
}

const mapDispathToProps = (dispatch) => ({
  getFriendList() {
    const action = actionCreators.getFriendList()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Friend)