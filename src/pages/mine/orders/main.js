import Order from './Order'
import Vue from 'vue'

const app = new Vue(Order)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "我的订单"
    }
}
