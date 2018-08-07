import Vue from 'vue'
import Mine from './Mine'

const app = new Vue(Mine)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "个人中心"
    }
}
