<template>
    <div>
        <!-- 点击授权 -->
        <div class="authorizationInfo">
            <div class="clickAuthorization">
                点击授权
            </div>

            <div class="memberInfo">
                <div>未授权</div>
                <div style="display: block;">普通会员</div>
            </div>
        </div>

        <!-- 查看订单 -->
        <div>
            <div class="orderTitle">
                <span>查看订单</span>
                <span>全部订单</span>
                <!-- <img src='/static/img/home/more' /> -->
            </div>

            <div class="orderStatus">
                <div v-for="(item, index) in orderStatus" :key="index">
                    <img :src="item.iconSrc" :alt="item.iconName" />
                    <span>{{item.iconName}}</span>
                </div>
            </div>
        </div>

        <!-- other -->
        <div>

        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            orderStatus: [
                {
                    iconSrc: '/static/img/mine/pendingPayment.png',
                    iconName: '待付款'
                },
                {
                    iconSrc: '/static/img/mine/pendingDelivery.png',
                    iconName: '待发货'
                },
                {
                    iconSrc: '/static/img/mine/pendingReceipt.png',
                    iconName: '待收货'
                },
                {
                    iconSrc: '/static/img/mine/pendingEvaluate.png',
                    iconName: '待评价'
                },
                {
                    iconSrc: '/static/img/mine/returnGoods.png',
                    iconName: '退货/售后'
                }
            ],

        }
    }
}
</script>

<style scoped lang="scss">
    .authorizationInfo {
        width: 100%;
        height: 225rpx;
        background-color: #FFCDD6;
        padding: 75rpx 0 0 0;

        .clickAuthorization {
            height: 150rpx;
            width: 150rpx;
            background-color: #F8F8F8;
            line-height: 150rpx;
            font-size: 30rpx;
            text-align: center;
            -webkit-border-radius: 150rpx;
            margin-left: 10%;
            margin-right: 2%;
            display: inline-block;
        }

        .memberInfo {
            display: inline-block;
            font-size: 30rpx;
            color: white;

            div {
                display: inline-block;
                width: 200rpx;
            }
        }
    }

    .orderTitle {
        border-bottom: 1px solid #666;
    }

    .orderStatus {

        div {

            img {
                width: 50rpx;
                height: 50rpx;
            }
        }
    }
</style>


