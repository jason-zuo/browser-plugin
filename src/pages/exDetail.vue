<template>
    <div class="exDetail">
        <nav-bar titleName="交易详情"></nav-bar>
        <div class="exDetail-content">
            <div class="content-img"></div>
            <p class="content-word">-100</p>
            <div class="content-detail">
                 <ul>
                     <li>
                         <span class="detailW">交易类型</span>
                         <span class="detailC">转出 EKT</span>
                     </li>
                     <li>
                         <span class="detailW">手续费用</span>
                         <span class="detailC">0.1 EKT</span>
                     </li>
                     <li>
                         <span class="detailW">交易单号</span>
                         <span class="detailC">asdfasdfasdfasdfasdfasdfasdfasfasdf</span>
                     </li>
                     <li class="spLi">
                         <span class="detailW ">交易时间</span>
                         <span class="detailC">2018 - 01- 11</span>
                     </li>
                     <li>
                         <span class="detailW">转入地址</span>
                         <span class="detailC">asdfasdfasdfasdfasdfasdf</span>
                     </li>
                     <li>
                         <span class="detailW">转出地址</span>
                         <span class="detailC">asdfasdfasdfasdfasdfasdf</span>
                     </li>
                 </ul>
            </div>
        </div>

    </div>
</template>
<script>
    import utils from '@/util/utils'
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '../store/constants';
    export default {
        name: 'exDetail',
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            ...mapActions([
                Actions.REMOVE_SEED
            ])
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../common/styles/index.scss';
    .exDetail{
        &-content{
            padding: 0 20px;
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
                &-word{
                    @include font-style(#ffffff, 15px);
                    text-align: center;
                }
                &-detail{
                    width: 100%;
                    padding: 24px 12px;
                    border-radius: 7px;
                    background-color: #364556;
                    @include box-shadow();
                    margin-top: 37px;
                    ul{
                        text-align: left;
                        li{
                            margin-bottom: 19px;
                        }
                        .spLi{
                            margin-bottom: 40px;
                        }
                    }
                }

            }
        }
        .detailW {
            @include font-style(#ffffff, 11px);
        }
        .detailC{
            @include font-style(#caab7e, 11px);
            display: inline-block;
            margin-left: 16px;
        }


    }
</style>
