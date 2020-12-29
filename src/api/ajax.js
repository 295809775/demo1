import { data } from 'autoprefixer';
import axios from 'axios'
export default function ajax(url = '', params = {}, type = 'GET') {
    //定义promise
    let promise;
    return new Promise((resolve, reject)=>{
        //判断请求方式
        if('GET' == type) {
            //拼接请求字符串
            let paramStr = '';
            Object.keys(params).forEach(key => {
                paramStr += key +'=' + params[key] + '&'
            });
            //过滤最后的&
            if(paramStr !=='') {
                paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'))
            }
            url += '?' + paramStr
            //发送get请求
            promise = axios.get(url)
        }else if('POST' === type) {
            promise = axios.post(url, params)
        }
        //返回请求的结果
        promise.then((response)=> {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}