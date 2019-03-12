import axios from 'axios'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

export const highlightCode = () => {
  let blocks = document.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
}


export function get (url, data, token) {
  return request(url, 'get', data, token)
}

export function post (url, data, token) {
  return request(url, 'post', data, token)
}

function request (url, method, data, token) {
  let obj = {}
  if (method === 'get') {
    obj = {
      method,
      url,
      params: data
    }
  } else if (method === 'post') {
    obj = {
      method,
      url,
      data
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

export const ua = {
  isIOS: navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod/i),
  isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1
}