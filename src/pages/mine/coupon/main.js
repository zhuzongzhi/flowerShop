import Coupon from './Coupon'
import Vue from 'vue'

const app = new Vue(Coupon)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "我的优惠券"
    }
}
