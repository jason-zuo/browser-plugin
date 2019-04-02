<template>
    <div class="success">
        <nav-bar titleName="备份钱包" @click="backMain"></nav-bar>
        <div class="success-content">
            <div class="content-img"></div>
            <p class="content-wallet">钱包创建成功</p>
            <p class="content-call">请备份钱包私钥，方便找回资产</p>
            <btn btnTitle="备份私钥" @click="savePri"></btn>
        </div>
        <toast toastTitle="我的私钥">
            <div class="toast-success" slot="content">
                sadfasdfasdf
            </div>
            <div class="toast-btn" slot="bottom">
                <btn btnTitle="复制文本" className="toast-btn"></btn>
            </div>
        </toast>
    </div>
</template>
<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '@/store/constants'
    export default {
        name: 'success',
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            ...mapActions([
                Actions.LOCK_STATUS
            ]),
            savePri() {

            },
            backMain() {
                this.$router.push('/mainPage')
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
    //nav公共样式
    .success{
        &-content{
            padding: 0 47px;
            text-align: center;
            .content{
                &-img{
                    width: 90px;
                    height: 90px;
                    background-repeat: no-repeat;
                    background-image: url('../assets/img/success.png');
                    background-size: 100% 100%;
                    margin: 0 auto;
                    margin-top: 90px;
                    margin-bottom: 22px;
                }
                &-wallet{
                    @include font-style(#ffffff, 19px);
                }
                &-call{
                    @include font-style(#8c909c, 15px);
                    margin-bottom: 62px;
                    margin-top: 18px;
                }
            }
        }
        .toast-success{
            @include font-style(#b4b6bd, 12px);
            line-height: 18px;
        }
        .toast-btn{
            @include font-style(#cbac7b, 15px);
            background-color: #43485e;
        }

    }
</style>
