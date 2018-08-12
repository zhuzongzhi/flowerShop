<template>
  <div>
    <!-- 已有地址列表 -->
    <div>
      <div v-for="(item, index) in addressList" :key="index" class="addressCard">
        <div>
          <img :src="addressSrc" :alt="addressAlt" class="addressCls"/>
        </div>
        <div>
          <span>{{item.receiver}}</span>
          <span>{{item.receiver_phone}}</span>
          <radio :checked="item.checked" style="color: red;"/>设为默认

          <button type="plain">编辑</button>
          <button type="plain">删除</button>
        </div>
      </div>

      <div v-show="!more">
        没有更多数据了
      </div>
    </div>

    <!-- 新增地址 -->
    <div class="addNewAddress" @click="addNewAddress">
      <span>+添加新地址</span>
    </div>
  </div>
</template>

<script>
import {get, post} from '@/utils/ajax'
import {showModal} from '@/utils/index'

export default {
  data () {
    return {
      user: {},
      addressList: [],
      more: true,
      pageNo: 1,
      addressSrc: '/static/img/mine/address/address.png',
      addressAlt: '地址',
    }
  },
  methods: {
    // 初始化
    init () {
      let self = this;

      self.user = wx.getStorageSync('userinfo');
      self.queryAddress(true);
    },

    // 查询地址列表
    async queryAddress (init) {
      let self = this;

      wx.showNavigationBarLoading();
      let address = await get('/weapp/address/queryAddress', {open_id: self.user.openId});
      let addressList = address.list;
      wx.hideNavigationBarLoading();

      if (addressList.length < 10 && self.pageNo > 0) {
        self.more = false;
      }

      if (init) {
        self.addressList = addressList;
        wx.stopPullDownRefresh();
      } else {
        self.addressList = self.addressList.concat(addressList);
      }

    },

    onReachBottom () {
      if (!this.more) {
        // 没有更多了
        return false;
      }
      this.pageNo = this.pageNo + 1;
      this.queryAddress();
    },

    // 跳转到“添加新地址”
    addNewAddress () {
      let self = this;

      let url = `./addNewAddress/main`;
      wx.navigateTo({url});
    }
  },
  mounted () {
    let self = this;

    self.init();
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

  .addressCard {

    div {
      display: inline;

      button {
        width: 100rpx;
        font-size: 20rpx;
        display: inline-block;
      }
    }
  }

  .addressCls {
    width: 60rpx;
    height: 60rpx;
  }
</style>


