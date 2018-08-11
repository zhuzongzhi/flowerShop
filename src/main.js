import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/home/main', 

      'pages/category/main', 

      'pages/shoppingCar/main', 

      'pages/mine/main',
      'pages/mine/orders/main',
      'pages/mine/coupon/main',
      'pages/mine/collect/main',
      'pages/mine/personalCenter/main',
      'pages/mine/addressManager/main',
      '^pages/mine/addressManager/addNewAddress/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#E30C26',
      navigationBarTitleText: '心语欣悦',
      navigationBarTextStyle: 'white'
    },
    "tabBar": {
      "list": [
        {
          "pagePath": "pages/home/main",
          "text": "首页",
          "iconPath": "static/img/icon-home.png",
          "selectedIconPath": "static/img/icon-home-active.png"
        },
        {
          "pagePath": "pages/category/main",
          "text": "分类",
          "iconPath": "static/img/icon-category.png",
          "selectedIconPath": "static/img/icon-category-active.png"
        },
        {
          "pagePath": "pages/shoppingCar/main",
          "text": "购物车",
          "iconPath": "static/img/icon-shop.png",
          "selectedIconPath": "static/img/icon-shop-active.png"
        },
        {
          "pagePath": "pages/mine/main",
          "text": "我的",
          "iconPath": "static/img/icon-mine.png",
          "selectedIconPath": "static/img/icon-mine-active.png"
        }
      ]
    }
  }
}
