<template>
  <div>
    <!-- 已有地址列表 -->
    <div>

    </div>

    <!-- 新增地址 -->
    <div class="addNewAddress" @click="addNewAddress">
      <span>+添加新地址</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    addNewAddress () {
      let self = this;

      let url = `./addNewAddress/main`;
      wx.navigateTo({url});
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
  .addNewAddress {
    font-size: 50rpx;
    background-color: #FD4A5F;
    position: fixed;
    text-align: center;
    width: 750rpx;
    height: 120rpx;
    bottom: 0;
    color: white;
    line-height: 120rpx;
  }
</style>


