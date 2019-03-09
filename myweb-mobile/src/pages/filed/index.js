import React, { Component } from 'react';
import './style.scss';
import Header from '../../common/header'
import Footer from '../../common/footer'
import { Seize } from '../../common/seize'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'

class Filed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      size: 5
    }
    this.cutString = this.cutString.bind(this)
  }
  render() {
    const {loading, list} = this.props
    return (
      <div className='filed'>
        <Header />
        <div className="seize-box">
          {
            loading? 
              new Array(5).fill(1).map((item, index) => (<Seize key={index} />)): 
              list.map((item, index) => (
                <div className='li' key={index}>
                  <div className="title">{item.title}</div>
                  <div className='content' dangerouslySetInnerHTML={{__html: this.cutString(item.content)}}></div>
                </div>
              ))
          }
        </div>
        <Footer />
      </div>
    )
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
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Filed);
