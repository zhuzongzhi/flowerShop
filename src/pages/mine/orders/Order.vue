<template>
  <div>
    <!-- 订单状态 -->
    <scroll-view scroll-x style="width: 100%;">
      <div class="orderStatus">
        <span :class="{'selectedColor': orderStatus === 0}" @click="changeStatus(0)">全部</span>
        <span :class="{'selectedColor': orderStatus === 1}" @click="changeStatus(1)">待付款</span>
        <span :class="{'selectedColor': orderStatus === 2}" @click="changeStatus(2)">待发货</span>
        <span :class="{'selectedColor': orderStatus === 3}" @click="changeStatus(3)">待收货</span>
        <span :class="{'selectedColor': orderStatus === 4}" @click="changeStatus(4)">待评价</span>
        <span :class="{'selectedColor': orderStatus === 5}" @click="changeStatus(5)">退换/售后</span>
      </div>
    </scroll-view>

    <!-- 订单列表 -->
    <div>
      <div v-show="noOrder" class="noOrderCls">
        <img :src="noOrderSrc" :alt="noOrderAlt">
        <div>{{noOrderAlt}}</div>
      </div>

      <div v-show="!noOrder">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noOrder: true,
      noOrderSrc: '/static/img/mine/order/noOrder.jpg',
      noOrderAlt: '亲，您还没有相关订单',
      orderStatus: 0,
    }
  },
  methods: {
    changeStatus (status) {
      let self = this;

      self.orderStatus = status;
    },
  },
  mounted () {
    let self = this;

    // self.init();
  },
  onLoad (options) {
    let self = this;
    self.orderStatus = parseInt(options.orderStatus) || 0;
  }
}
</script>

<style scoped lang="scss">
  .orderStatus {
    font-size: 35rpx;
    font-weight: 200;
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    white-space: nowrap; 
    display: inline-block;
    overflow: hidden;

    span {
      padding: 20rpx 20rpx 20rpx 20rpx;
    }
  }

  .noOrderCls {
    text-align: center;

    div {
      margin-top: 30rpx;
      color: #CACACA;
    }
  }

  .selectedColor {
    color: red;
  }
</style>


