<template>
    <div class="ektDetail">
        <nav-bar titleName="EKT"></nav-bar>
        <div class="ektDetail-main">
            <div class="ektDetail-main-bar">
                <div class="bar-title">
                    <p class="bar-title-ekt" >2,2121.32123</p>
                    <p class="bar-title-money" >=1212121</p>
                </div>
                <div class="bar-btn">
                    <btn btnTitle="转入" className="bar-brn bar-left"></btn>
                    <btn btnTitle="转出" className="bar-brn"></btn>
                </div>
            </div>
            <div class="ektDetail-main-list">
                <p class="list-title">交易记录</p>
                <div v-if="list.length == 0" class="list-none">
                    <div class="list-none-body">
                        <span class="body-word">暂时还没有交易记录哦~</span>
                        <span class="body-img"></span>
                    </div>
                </div>
                <ul v-else class="list-arr">
                    <li v-for="(item, index) in list">
                        <div class="liItem">
                            <span class="liC">转出 EKT</span>
                            <span class="liC">{{item.num}}</span>
                        </div>
                        <div class="liItem">
                            <span class="liW">{{item.address}}</span>
                            <span class="liW">{{item.time}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ektDetail',
        data() {
            return {
                list: [
                    {num: '-100', time: 11111, address: '212121xzcvxx2'}
                ]
            }
        },
        computed: {

        },
        methods: {

        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../common/styles/index.scss';
    $BGIMG : '../assets/img/status.png';
    .ektDetail{
        &-main{
            padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            &-bar{
                height: 145px;
                border-radius: 7px;
                background-color: #3f4556;
                @include box-shadow();
                position: relative;
                .bar-title{
                    padding-top: 20px;
                    &-ekt{
                        padding-left:10px;
                        @include font-style(#ffffff, 37px, 600);

                    }
                    &-money{
                        padding-left:10px;
                        @include font-style(#b4b6bd, 10px, 500);
                        margin-top: 2px;
                    }

                }
                .bar-brn{
                    border-radius: 0;
                }
                .bar-btn{
                    display: flex;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                }
                .bar-left{
                    color: #caab7e;
                    background-color:#34385d;
                }
            }
            &-list{
                margin-top: 15px;
                padding-left: 9px;
                padding-right: 9px;
                border-radius: 7px;
                background-color: #3f4556;
                @include box-shadow();
                .list-title{
                    padding-top: 18px;
                    padding-bottom: 18px;
                    @include font-style(#caab7e, 10px);
                }
                .list-none{
                    &-body{
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 15px;
                        .body-word{
                            @include font-style(#8c909c, 13px);
                            margin-top: 10px;
                        }
                        .body-img{
                            width: 86px;
                            height: 80px;
                            display: inline-block;
                            @include bg-img($BGIMG);
                        }
                    }
                }
                .list-arr{
                    li{
                        padding: 20px 0;
                        .liItem{
                            display: flex;
                            margin-top: 10px;
                            justify-content: space-between;
                        }

                        .liW{
                            @include font-style(#8c909c, 13px);
                        }
                        .liC{
                            @include font-style(#ffffff, 13px);
                        }

                    }
                }
            }
        }
    }
</style>
