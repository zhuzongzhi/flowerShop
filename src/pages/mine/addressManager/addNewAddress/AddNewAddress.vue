<template>
  <div>
    <div class="receiverInfo" style="border-top:10rpx solid #F5F5F5;border-bottom:25rpx solid #F5F5F5;">
      <div style="border-bottom:1px solid #CACACA;">收 货 人： <input type="text" placeholder="请输入收货人姓名"/></div>
      <div>手 机 号： <input type="number" placeholder="请输入收货人联系方式"/></div>
    </div>

    <div class="addressInfo" style="border-top:10rpx solid #F5F5F5;">
      <div style="border-bottom:1px solid #CACACA;">
        所在区域：

        <picker mode="region" :value="region" custom-item="customItem">
          当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
        </picker>  
      </div>
      <div style="border-bottom:1px solid #CACACA;">详细地址：<input type="text" placeholder="请输入您的详细地址"/></div>
    </div>

    <div class="saveBtn">
      <button type="warn" @click="saveAddress">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      region: ['广东省', '广州市', '海珠区'],
      customItem: '全部'
    }
  },
  methods: {
    addNewAddress () {
      let self = this;

      // let url = `./addNewAddress/main`;
      // wx.navigateTo({url});
    },

    // 保存地址
    saveAddress () {
      let self = this;

      console.log('保存了地址');
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


