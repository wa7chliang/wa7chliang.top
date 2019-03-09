import axios from 'axios'

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