import Promise from 'promise'
import jsonp from 'jsonp'

export default function jsonpFetch(url) {
  return new Promise((resolve, reject) => {
    console.log(url);
    jsonp(url, null, (err, data) => {
      if(err) {
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
