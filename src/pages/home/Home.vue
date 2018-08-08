<template>
    <div>
        <scroll-view scroll-y style="height: 100%;">
        <!-- 轮播图 -->
        <div>
            
        </div>

        <!-- 定位/搜索 -->
        <div>
            
        </div>

        <!-- 分类 -->
        <div class="categoryCls">
            <div v-for="(item, index) in categoryList" :key="index" class="categoryListCls">
                <div class="categoryImg">
                    <img :src="item.categoryIconSrc" :alt="item.categoryName">
                    <span>{{item.categoryName}}</span>
                </div>
            </div>
        </div>

        <!-- 新上产品 -->
        <div class="newProduct">
            <div>
                <span class="newProductTitle">新上产品</span>
                <span class="" style="float: right;margin-right:40rpx;">更多
                    <img :src="moreSrc" class="moreSrcCls"/>
                </span>
            </div>

            <div class="flowers" v-for="(item, index) in flowers" :key="index">
                <img :src="item.flowerSrc || '/static/img/flower1.jpg'" :alt="item.flower_name" class="flowerImg">
                <div class="flowerInfo">
                    <div>{{item.flower_name}}</div>
                    <div style="color: #C3C3C3;">{{item.flower_language}}</div>
                    <div>
                        <span style="color: red;">￥{{item.flower_current_price}} </span>
                        <span style="color: #C3C3C3;text-decoration: line-through;"> 原价 ￥{{item.flower_origina_price}}</span>
                    </div>
                    <div>
                        <span style="color: #C3C3C3;">{{item.is_new_product ? '新上架' : ''}}</span>
                        <span style="color: #C3C3C3;float: right;">销售：{{item.sales_volume}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin:0 auto;">
            <button type="default" size="dafault"  class="queryMore">点击查看更多</button>
        </div>

        </scroll-view>
    </div>
</template>

<script>
import {get, post} from '@/utils/ajax'

export default {
    data () {
        return {
            categoryList: [
                {
                    categoryName: '全部商品',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                },
                {
                    categoryName: '产品上新',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                },
                {
                    categoryName: '热销产品',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                },
                {
                    categoryName: '优惠信息',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                },
                {
                    categoryName: '生日鲜花',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                },
                {
                    categoryName: '爱情鲜花',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                },
                {
                    categoryName: '开业花篮',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                },
                {
                    categoryName: '孝顺长辈',
                    categoryIconSrc: '/static/img/flowers.jpg',
                    categoryPath: ''
                }
            ],
            flowers: [],
            moreSrc: '/static/img/home/more.png',
            pageNo: 1,
            pageSize: 20,
            more: false,
        }
    },
    methods: {
        async init(init) {
            let vm = this;

            if (init) {
                this.page = 1;
                this.more = true;
            }

            const res = await get('/weapp/flower/queryFlowers', {pageNo: this.pageNo});

            if (res && res.list.length) {
                vm.flowers = [...res.list, ...res.list];
                console.log('flowers', vm.flowers);
            }
            

        }
    },
    mounted () {
        let vm = this;

        vm.init(true);
    }
}
</script>

<style scoped lang="scss">
    .categoryCls {
        text-align:center;
        :hover {
            background-color: #F5F5F5;
        }
    }

    .categoryListCls {
        display: inline;
        width: 25%;
        float: left;
        margin: 0 auto;
        padding-top: 50rpx;
        padding-bottom: 50rpx;
    }

    .categoryImg {
        position: relative;
    }

    .categoryImg img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 1000rpx;
    }

    .categoryImg span {
        position: absolute;
        top: 120rpx;
        left: 43rpx;
        font-size: 26rpx;
    }

    .newProduct {
        /* position: fixed; */
        top: 510rpx;
        float: right;
        margin-left: 48rpx;
        margin-top: 30rpx;
        margin-bottom: 30rpx;
    }

    .newProductTitle {
        border-left: 3px solid black;
        padding-left: 10rpx;
        font-size: 30rpx;
    }

    .more {
        position: fixed;
        left: 620rpx;
        color: #979090;
        font-size: 30rpx;
    }

    .grayLine {
        position: fixed;
        top: 480rpx;
        height: 30rpx;
        width: 100%;
        background-color: #F5F5F5;
    }

    .flowers {
        float: left;
        margin: 20rpx 40rpx 20rpx 0;
        border: 1px solid #F3F3F3;
    }

    .flowerImg {
        width: 300rpx;
        height: 300rpx;
    }

    .moreSrcCls {
        width: 30rpx;
        height: 30rpx;
    }

    .imgDiv {
        position: absolute;
    }

    .flowerInfo {
        font-size: 28rpx;
        div {
            margin: 10rpx 0 10rpx 5rpx;
        }
    }

    .queryMore {
        width: 80%;
        font-size: 30rpx;
        margin-bottom: 30rpx;
    }
</style>


