import jsonpClient from 'jsonp-client'
import Promise from 'promise'

export default function jsonp(url) {
  return new Promise((resolve, reject) => {
    jsonpClient(url, (err, data) => {
      if(err) {
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
