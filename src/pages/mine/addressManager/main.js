import AddressManager from './AddressManager'
import Vue from 'vue'

const app = new Vue(AddressManager)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "地址管理"
    }
}
