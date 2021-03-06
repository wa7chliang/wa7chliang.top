import React, { Component } from 'react';
import './style.scss';
import Header from '../../common/header'
import Footer from '../../common/footer'
import {get, post, highlightCode} from '../../assets/js/util'
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
      fixedb: true
    }
    this.getArticle = this.getArticle.bind(this)
    this.addPvApi = this.addPvApi.bind(this)
  }
  render() {
    return (
      <div className='detail' ref='detail'>
        <Header />
        <div className="detail-box">
          <div className="title">{this.state.title}</div>
          <div className="title-box">
            <span className='time'>发表于:{this.state.moment}</span>
            <span className='pv'>浏览次数:{this.state.pv}</span>
          </div>
          <div className='content' dangerouslySetInnerHTML={{__html: this.state.content}}></div>
        </div>
        <div className='back' onClick={() => {this.props.history.goBack()}}>返回</div>
        <div className={this.state.fixedb? 'fixedb': ''}>
          <Footer />
        </div>
      </div>
    )
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      this.getArticle(this.props.match.params.id)
    }
  }

  async getArticle(data) {
    const res = await get(api.getArticle, {id: data})
    if (res.state) {
      const { title, id, moment, pv} = res.result
      let content
      res.result.content.indexOf('<pre><code>&lt;!--more--&gt;</code></pre>') > 0? 
      content = res.result.content.replace('<pre><code>&lt;!--more--&gt;</code></pre>', ''):
      content = res.result.content
      this.setState({content, title, id, moment, pv}, () => {
        this.setState({fixedb: window.innerHeight > this.refs.detail.offsetHeight + 130})
        this.addPvApi({id: this.props.match.params.id, pv: Number(this.state.pv)})
      })  //  判断是否让footer position: fixed
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

  componentDidUpdate() {
    highlightCode()
  }
}

export default Detail