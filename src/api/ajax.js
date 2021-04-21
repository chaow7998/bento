import axios from 'axios'

export default function ajax(url, data = {}, method = "GET") {
    return new Promise(function (resolve, reject) {
        let promise
        if (method === 'get') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.then(response => {
            resolve(response.data)
        })
            .catch(err => {
                reject(err)
            })
    })
}