/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
 import axios from 'axios';
//  import router from '../router/index.js'
 //引入
//  import Cookies from 'js-cookie'
 
 // 环境的切换
 //  if (process.env.NODE_ENV == 'development') {    
 //      axios.defaults.baseURL = '/api';
 //  } else if (process.env.NODE_ENV == 'debug') {    
 //      axios.defaults.baseURL = '';
 //  } else if (process.env.NODE_ENV == 'production') {    
 //      axios.defaults.baseURL = 'http://api.123dailu.com/';
 //  }
 // 请求超时时间
 
 axios.defaults.withCredentials = true
 axios.defaults.timeout = 10000;
 
 // post请求头
 // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 // axios.defaults.headers.post['Content-Type'] = 'application/json';
 // const service = axios.create({
 //     headers: {
 //         'Authorization': token	//	可以是授权凭证用的参数值
 //     }
 // });
 
 /** 
  * get方法，对应get请求 
  * @param {String} url [请求的url地址] 
  * @param {Object} params [请求时携带的参数] 
  */
 
 
 
 export function get(url, params) {
     return new Promise((resolve, reject) => {
         axios.get(url, {
             params: params
         })
             .then(res => {
                 resolve(res.data);
             })
             .catch(err => {
                 reject(err.data)
             })
     });
 }
 /** 
  * post方法，对应post请求 
  * @param {String} url [请求的url地址] 
  * @param {Object} params [请求时携带的参数] 
  */
 export function post(url, params) {
     return new Promise((resolve, reject) => {
         axios.post(url, params)
             .then(res => {
                 resolve(res.data);
             })
             .catch(err => {
                 reject(err.data)
             })
     });
 }
 