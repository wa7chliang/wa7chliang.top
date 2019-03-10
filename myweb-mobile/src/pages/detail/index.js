import React, { Component } from 'react';
import './style.scss';
import Header from '../../common/header'
import {get, post} from '../../assets/js/util'
import {api} from '../../assets/js/api'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      id: '',
      moment: '',
      pv: '',
    }
    this.getArticle = this.getArticle.bind(this)
    this.addPvApi = this.addPvApi.bind(this)
  }
  render() {
    return (
      <div className='detail'>
        <Header />
        <div className="detail-box">
          <div className="title">{this.state.title}</div>
          <div className="title-box">
            <span className='time'>发表于:{this.state.moment}</span>
            <span className='pv'>浏览次数:{this.state.pv}</span>
          </div>
          <div className='content' dangerouslySetInnerHTML={{__html: this.state.content}}></div>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      this.getArticle(this.props.match.params.id)
      setTimeout(() => {  //  逻辑写不好需要用定时器得到pv值
        this.addPvApi({id: this.props.match.params.id, pv: Number(this.state.pv)})
      }, 0)
    }
  }

  async getArticle(data) {
    const res = await get(api.getArticle, {id: data})
    if (res.state) {
      const {content, title, id, moment, pv} = res.result
      this.setState({content, title, id, moment, pv})
    }
  }

  async addPvApi(data) {
    const res = await post(api.addPv, data)
    if (res.state) {
      this.setState({
        pv: Number(this.state.pv)+1
      })
    }
  }
}

export default Detail