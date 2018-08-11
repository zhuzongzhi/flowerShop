import Collect from './Collect'
import Vue from 'vue'

const app = new Vue(Collect)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "我的收藏"
    }
}
