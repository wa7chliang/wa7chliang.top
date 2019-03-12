import React, { Component } from 'react';
import './style.scss';
import Header from '../../common/header'
import Footer from '../../common/footer'
import { Seize } from '../../common/seize'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {Link} from 'react-router-dom';
import {highlightCode} from '../../assets/js/util'

class Filed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      size: 5
    }
    this.cutString = this.cutString.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }
  render() {
    const {page, size} = this.state
    const {loading, list, count} = this.props
    return (
      <div className='filed'>
        <Header />
        <div className="seize-box">
          {
            list.map((item, index) => (
              <Link to={`/detail/${item.id}`} key={index}>
                <div className='li'>
                  <div className="title">{item.title}</div>
                  <div className='content' dangerouslySetInnerHTML={{__html: this.cutString(item.content)}}></div>
                </div>
              </Link>
            ))
          }
          {
            loading? 
              new Array(5).fill(1).map((item, index) => (<Seize key={index} />)): 
              null
          }
        </div>
        {
          count/size > page? 
          <div 
            className='more'
            onClick={this.loadMore}>加载更多</div>
          : <div className='none'>～客官!已经没有更多啦~</div>
        }
        <Footer />
      </div>
    )
  }

  loadMore() {
    this.props.setLoading(true)
    this.props.getlist(this.state.page + 1, this.state.size)
    this.setState({
      list: this.props.list,
      page: this.state.page + 1
    })
  }

  cutString(str) {
    if (str.indexOf('<pre><code>&lt;!--more--&gt;</code></pre>') > 0) {
      return str.slice(0, str.indexOf('<pre><code>&lt;!--more--&gt;</code></pre>'))
    } else {
      return str
    }
  }

  componentDidMount() {
    this.props.getCount()
    this.props.getlist(this.state.page, this.state.size)
    this.setState({
      list: this.props.list
    })
  }

  componentDidUpdate() {
    highlightCode()
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.filed.list,
    loading: state.filed.loading,
    count: state.filed.count
  }
}

const mapDispathToProps = (dispatch) => ({
  getlist(page, size) {
    const action = actionCreators.getlist(page, size)
    dispatch(action)
  },
  getCount() {
    const action = actionCreators.getCount()
    dispatch(action)
  },
  setLoading(flag) {
    const action = actionCreators.setLoading(flag)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Filed);
