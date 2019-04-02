<template>
    <div class="me">
        <nav-bar titleName="我的" @click="back"></nav-bar>
        <div class="me-header" @click="toQr">
            <p class="header-me">我的钱包</p>
            <p class="header-code">adsfasdfasfd</p>
        </div>
        <ul class="me-list">
            <li >
               <link-item @click="next">
                   <p class="link" slot="leftContent">
                       <img src="../assets/img/ex.png" alt="" class="link-img">
                       <span class="link-word">兑换主网币</span>
                   </p>
               </link-item>
            </li>
            <li >
                <link-item @click="next">
                    <p class="link" slot="leftContent">
                        <img src="../assets/img/pri.png" alt="" class="link-img">
                        <span class="link-word">导出私钥</span>
                    </p>
                </link-item>
            </li>
            <li >
                <link-item @click="next">
                    <p class="link" slot="leftContent">
                        <img src="../assets/img/key.png" alt="" class="link-img">
                        <span class="link-word">导出 KeyStore</span>
                    </p>
                </link-item>
            </li>
            <li >
                <link-item @click="next">
                    <p class="link" slot="leftContent">
                        <img src="../assets/img/setting.png" alt="" class="link-img">
                        <span class="link-word">设置</span>
                    </p>
                </link-item>
            </li>
            <li >
                <link-item @click="next">
                    <p class="link" slot="leftContent">
                        <img src="../assets/img/lock.png" alt="" class="link-img">
                        <span class="link-word">锁屏</span>
                    </p>
                </link-item>
            </li>
        </ul>
    </div>
</template>
<script>
    import linkItem from '../components/linkItem';
    export default {
        name: 'me',
        data() {
            return {

            }
        },
        components: {
            linkItem
        },
        computed: {

        },
        methods: {
            next() {

            },
            back(){
                this.$router.back()
            },
            toQr() {
                this.$router.push('/exportQr')
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
    $MEBG: '../assets/img/meTitle.png';
   .me{
       padding: 0 20px;
        &-header{
            width: 100%;
            height:137px;
            margin-top: 20px;
            position: relative;
            margin-bottom: 15px;
            @include bg-img($MEBG);
            @include box-shadow();
            cursor: pointer;
            padding: 0 22px;
            overflow: hidden;
            .header-me{
                @include font-style(#b4b6bd, 14px);
                margin-top: 47px;
            }
            .header-code{
                @include font-style(#ffffff, 16px, 600);
            }

        }
       &-list{
           overflow: hidden;
           li{
               margin-top: 15px;
               .link{
                   &-img{
                        height: 19px;
                        vertical-align: middle;
                         margin-right:17px;
                   }
                   &-word{
                       @include font-style(#ffffff, 15px);
                       vertical-align: middle;
                       display: inline-block;
                   }
               }
           }
       }
   }
</style>
