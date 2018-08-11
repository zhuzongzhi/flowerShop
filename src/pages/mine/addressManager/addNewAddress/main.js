import AddNewAddress from './AddNewAddress'
import Vue from 'vue'

const app = new Vue(AddNewAddress)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "新增地址"
    }
}
