import PersonalCenter from './PersonalCenter'
import Vue from 'vue'

const app = new Vue(PersonalCenter)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "关于我们"
    }
}
