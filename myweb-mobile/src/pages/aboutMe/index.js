import React, { Component } from 'react';
import './style.scss'
import Header from '../../common/header'

class AboutMe extends Component {
  render() {
    return (
      <div className='aboutMe'>
        <Header />
        <div className="content-box">
          <div className="img-box">
            <div className='w360'></div>
            <div className='n360'></div>
            <div className='img'>
              <img src='https://avatars3.githubusercontent.com/u/26890547?s=460&v=4' alt=""/>
            </div>
          </div>
          <div className='summary'>
            <p>嗨！我是wa7chliang，我的爱好是：动漫、二次元、switch游戏、敲代码</p>
          </div>
          <div className="link">
            <p>github:<a href='https://github.com/wa7chliang'>wa7chliang</a></p>
            <p>微博：<a href='https://weibo.com/1592017851/'>进入微博</a></p>
            <p>知乎：<a href='https://www.zhihu.com/people/wa7ch/activities'>进入知乎</a></p>
            <p>邮箱：wa7chliang@163.com</p>
          </div>
          <div className="tips">
            <p>微博与知乎很少发布内容</p>
            <p>本博客新建于2018年6月29日(一直在维护中)</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe