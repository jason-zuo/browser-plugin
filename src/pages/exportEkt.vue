<template>
    <div class="exportEkt">
        <nav-bar titleName="转出 EKT"></nav-bar>
        <div class="exportEkt-content">
            <div class="exportEkt-content-in">
                <p class="eW in-word">转入地址</p>
                <p class="eC in-address">asdfasdfasdfasdfasd</p>
            </div>
            <div class="exportEkt-content-out">
                <div class="out-item">
                    <p class="eW">转出 EKT 数量 <span class="eC">免手续费用</span></p>
                    <div class="out-input">
                        <my-input placeholder="现有 EKT: 233" type="number" className="addressInput"></my-input>
                        <div class="out-input-btn eW">全部转出</div>
                    </div>
                </div>
                <div class="out-item">
                    <p class="eW">添加备注</p>
                    <div class="out-input out-input-text">
                        <my-input placeholder="最多500字" type="textarea" className="addressInput"></my-input>
                    </div>
                </div>
            </div>
            <p class="exportEkt-word">请仔细核对并确认信息， 转出后无法撤销</p>
            <div class="exportEkt-btn">
                <btn btnTitle="转出" ></btn>
            </div>
        </div>
    </div>
</template>
<script>
    import utils from '@/util/utils'
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '../store/constants';
    export default {
        name: 'setting',
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
    .exportEkt{
        &-content{
            padding-top: 22px;
            padding-left: 20px;
            padding-right: 20px;
            overflow: hidden;
            &-in{
                height: 85px;
                background-color: #3f4555;
                border-radius: 7px;
                padding: 10px 22px 0 22px;
                @include box-shadow();
            }
            &-out{
                margin-top: 15px;
                background-color: #3f4555;
                border-radius: 7px;
                padding: 22px 22px 0 22px;
                @include box-shadow();

            }
            .out-item{
                overflow: hidden;
            }
            .out-input{
                display: flex;
                margin-top: 15px;
                margin-bottom: 33px;
                .inputwrap{
                    width: 77%;
                }
                .addressInput{
                    box-shadow: none;
                    background-color: #43485d;
                }
                &-btn{
                    flex: 1;
                    line-height: 40px;
                    background-color: #43485d;
                    text-align: center;
                }
            }
            .out-input-text{
                .inputwrap{
                    width: 100%;
                }
            }
            .in{
                &-address{
                    margin-top: 11px;
                }
            }
            .eW {
                @include font-style(#caab7e, 15px);
            }
            .eC{
                @include font-style(#ffffff, 14px);
            }
        }
        &-word{
            @include font-style(#8c909c, 14px);
            padding-left: 12px;
            margin-top: 20px;
            margin-bottom: 35px;
        }
        &-btn{
            padding: 0 27px;
        }
    }
</style>
