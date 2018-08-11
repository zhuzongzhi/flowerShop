<template>
  <div>
    <div class="receiverInfo" style="border-top:10rpx solid #F5F5F5;border-bottom:25rpx solid #F5F5F5;">
      <div style="border-bottom:1px solid #CACACA;">收 货 人： 
        <input type="text" placeholder="请输入收货人姓名" v-model="receiver"/>
      </div>
      <div>手 机 号： <input type="number" placeholder="请输入收货人联系方式" v-model="receiver_phone"/></div>
    </div>

    <div class="addressInfo" style="border-top:10rpx solid #F5F5F5;">
      <div style="border-bottom:1px solid #CACACA;">
        <picker mode="region" @change="bindRegionChange" :value="region">
          所在区域：{{region[0]}}，{{region[1]}}，{{region[2]}}
        </picker>  
      </div>
      <div style="border-bottom:1px solid #CACACA;">详细地址：
        <input type="text" placeholder="请输入您的详细地址" v-model="address_detail"/>
      </div>
    </div>

    <div class="saveBtn">
      <button type="warn" @click="saveAddress">保存</button>
    </div>
  </div>
</template>

<script>
import {get, post} from '@/utils/ajax'
import {showModal} from '@/utils/index'

export default {
  data () {
    return {
      region: ['北京', '北京市', '东城区'],
      customItem: '全部',
      pageSize: 10,
      pageNo: 1,
      receiver: '',
      receiver_phone: '',
      address_detail: ''
      
    }
  },
  methods: {
    // 保存地址
    async saveAddress () {
      let self = this;
      let user = wx.getStorageSync('userinfo');

      let saveParams = {
        open_id: user.openId,
        receiver: self.receiver,
        receiver_phone: self.receiver_phone,
        receiver_region: self.region,
        address_detail: self.address_detail
      };

      wx.showNavigationBarLoading();
      await post('/weapp/address/updateSertAddress', saveParams);
      wx.hideNavigationBarLoading();

      showModal('添加成功', `地址添加成功`);

    },

    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.target.value)
      this.region = e.target.value;
    }

    
  },
  mounted () {
    let self = this;

    // self.init();
  },
  onLoad (options) {
    
  }
}
</script>

<style scoped lang="scss">
  .receiverInfo, .addressInfo {
    font-size: 30rpx;

    div {
      padding: 20rpx 0 20rpx 20rpx;
    }

    input {
      display: inline-block;
      overflow: visible;
      width: 500rpx;
      color: #908090;
    }
  }

  .saveBtn {
    margin: 0 auto;
    margin-top:200rpx;
    width: 80%;
    color: white;
  }
</style>


