import axios from 'axios'
// import Vue from 'vue'
const CancelToken = axios.CancelToken

export function get (url, data) {
  return request(url, 'get', data)
}

export function post (url, data) {
  return request(url, 'post', data)
}

function request (url, method, data) {
  let obj = {}
  let cancelToken = new CancelToken(function executor (c) {
    Vue.cancel.push(c)
  })
  if (method === 'get') {
    obj = {
      method,
      url,
      params: data,
      cancelToken
    }
  } else if (method === 'post') {
    obj = {
      method,
      url,
      data,
      cancelToken
    }
  }
  return new Promise((resolve, reject) => {
    axios(obj).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
