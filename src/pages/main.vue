<template>
    <div class="mainPage">
        <div class="mainPage-logo">
            <nav>
                <img src="../assets/img/dappLogo.png" class="logo-left" alt="">
                <img src="../assets/img/me.png" class="logo-right" alt="" @click="toSetting">
            </nav>
            <content>
                <p class="content-title">
                    <span class="content-title-mon">¥</span>
                    <span class="content-title-con">245,0000</span>
                </p>
                <p class="content-word">我的总资产</p>
            </content>
        </div>
        <div class="mainPage-content">
            <ul class="mainPage-content-main">
                <li>
                    <div class="content-img"></div>
                    <div class="content-main">
                        <div class="content-main-title">
                            <span class="maL">EKT</span>
                            <span class="maL maLl">2032.0032</span>
                        </div>
                        <div class="content-main-price">
                            <span class="maR">EKT</span>
                            <span class="mar maRr">=2043</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mainPage',
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            toSetting() {
                this.$router.push('/me')
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../common/styles/index.scss';
    $TOPBG : '../assets/img/mainPage.png';
    .mainPage{
        height: 100%;
        position: relative;
        &-logo{
            width: 100%;
            height: 205px;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            border-radius: 0 0 15px 15px;
            @include bg-img($TOPBG);
            position: relative;
            nav{
                display: flex;
                height: 50px;
                padding:  0 20px;
                align-items: center;
                justify-content: space-between;
                .logo{
                    &-left{
                        height: 30px;
                    }
                    &-right{
                        height: 30px;
                        cursor: pointer;
                    }
                }
            }
            content{
                display: inline-block;
                padding:  0 20px;
                margin-top: 52px;
                .content{
                    &-title{
                        &-mon{
                            @include font-style(#ffffff, 12px);
                        }
                        &-con{
                            @include font-style(#ffffff, 30px, 600);
                            margin-left: 3px;
                        }
                    }
                    &-word{
                        @include font-style(#b4b6bd, 13px);
                    }
                }
            }
        }
        &-content{
            width: 100%;
            padding: 0 20px;
            position: absolute;
            z-index: 3;
            top: 180px;
            &-main{
                width: 100%;
                display: inline-block;
                border-radius: 6px;
                background-color: #3f4556;
                @include box-shadow();
                li{
                    width: 100%;
                    height: 75px;
                    display: flex;
                    padding: 0 10px;
                    align-items: center;
                    .content{
                        &-img{
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            margin-right: 15px;
                            background-color: #ffffff;
                        }
                        &-main{
                            flex: 1;
                            span{
                                display: inline-block;
                            }
                            &-title{
                                display: flex;
                                justify-content: space-between;
                                @include font-style(#ffffff, 12px, 600);
                            }
                            &-price{
                                display: flex;
                                justify-content: space-between;
                                @include font-style(#ffffff, 12px, 600);
                                margin-top: 6px;
                                .maLl{
                                    @include font-style(#8c909c, 8px);
                                }
                                .maRr{
                                    @include font-style(#caab7e, 10px);
                                }
                            }
                        }

                    }
                }
            }
        }
    }
</style>
