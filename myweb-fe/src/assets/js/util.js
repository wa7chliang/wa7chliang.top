import axios from 'axios'

export function get (url, data) {
  return request(url, 'get', data)
}

export function post (url, data) {
  return request(url, 'post', data)
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
