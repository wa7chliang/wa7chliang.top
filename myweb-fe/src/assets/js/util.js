import axios from 'axios'
// import Vue from 'vue'
const CancelToken = axios.CancelToken

export function get (url, data, token) {
  return request(url, 'get', data, token)
}

export function post (url, data, token) {
  return request(url, 'post', data, token)
}

function request (url, method, data, token) {
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
  if (token) {
    obj = {...obj, headers: {token}}
  }
  return new Promise((resolve, reject) => {
    axios(obj).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
