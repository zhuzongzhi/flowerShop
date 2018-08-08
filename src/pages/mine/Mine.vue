<template>
    <div>
        <div class="upperHalf">
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
            <div style="margin: 10rpx 20rpx 10rpx 20rpx;">
                <div class="orderTitle">
                    <span style="font-weight: bold;">查看订单</span>
                    <img :src='moreSrc' class="moreSrcCls" style="float: right;"/>
                    <span style="float: right;color: #A6A6A6;">全部订单</span>
                </div>

                <div class="orderStatus">
                    <div v-for="(item, index) in orderStatus" :key="index">
                        <img :src="item.iconSrc" :alt="item.iconName" />
                        <div>{{item.iconName}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- other -->
        <div class="other">
            <div>
                <span>我的余额 ￥0.00</span>
                <img :src='moreSrc' class="moreSrcCls" style="float: right;"/>
                <span style="float: right;color: #A6A6A6;font-weight: 100;">余额充值</span>
            </div>

            <div>
                <span>优惠券</span>
                <img :src='moreSrc' class="moreSrcCls" style="float: right;"/>
            </div>

            <div>
                <span>我的收藏</span>
                <img :src='moreSrc' class="moreSrcCls" style="float: right;"/>
            </div>

            <div>
                <span>地址管理</span>
                <img :src='moreSrc' class="moreSrcCls" style="float: right;"/>
            </div>

            <div>
                <span>绑定手机</span>
                <img :src='moreSrc' class="moreSrcCls" style="float: right;"/>
            </div>

            <div>
                <span>关于我们</span>
                <img :src='moreSrc' class="moreSrcCls" style="float: right;"/>
            </div>

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
            moreSrc: '/static/img/home/more.png',

        }
    }
}
</script>

<style scoped lang="scss">
    .upperHalf {
        border-bottom: 20rpx solid #EFEFF4;
    }

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
        font-size: 30rpx;
        padding: 20rpx 0 20rpx 0;
        border-bottom: 1px solid #888;
    }

    .orderStatus {
        font-size: 30rpx;
        padding: 30rpx 0 20rpx 0;

        div {
            text-align: center;
            display: inline-block;
            width: 140rpx;
            color: #888;

            img {
                width: 50rpx;
                height: 50rpx;
            }
        }
    }

    .moreSrcCls {
        width: 30rpx;
        height: 30rpx;
    }

    .other {
        color: #333;
        font-size: 30rpx;
        margin: 10rpx 20rpx 10rpx 20rpx;

        div {
            padding: 25rpx 0 25rpx 0;
            font-weight: bold;
            border-bottom: 1px solid #EFEFF4;

            img {
                color: #EFEFF4;
            }
        }
    }
</style>


