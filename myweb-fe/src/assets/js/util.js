import axios from 'axios'

export function get (url, data) {
  return request(url, 'get', data)
}

export function post (url, data) {
  return request(url, 'post', data)
}

function request (url, method, data) {
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
  return new Promise((resolve, reject) => {
    axios(obj).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
