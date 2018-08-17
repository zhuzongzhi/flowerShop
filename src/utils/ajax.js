// 工具函数库
import config from './config'
import {showModal, showSuccess} from './index'
import qcloud from 'wafer2-client-sdk'

// http get工具函数 获取数据
export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

export function login () {
  return new Promise((resolve, reject) => {
    let user = wx.getStorageSync('userinfo');
  
    if (!user) {
      qcloud.setLoginUrl(config.loginUrl)
      console.log('开始登录');
      qcloud.login({
        success: function (userinfo) {
          console.log('回调成功');
          qcloud.request({
            url: config.userUrl,
            login: true,
            success (userRes) {
              showSuccess('登录成功')
              wx.setStorageSync('userinfo', userRes.data.data);
              resolve(userRes.data.data);
            }
          })
        },
        fail: function (err) {
          console.log('登录失败', err);
          reject(userinfo);
        }
      })
    } else {
      resolve(user);
    }
  });
}