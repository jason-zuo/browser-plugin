<template>
    <div class="importWallet">
        <nav-bar titleName="导入钱包" @click="back"></nav-bar>
        <div class="importWallet-content">
            <tabs :tabs="tabs" class="tab-container">
                <div class="tab-contents">
                    <p class="tab-contents-title">直接复制粘贴 EKT 钱包 KeyStore 至输入框</p>
                    <my-input type="textarea" placeholder="输入 EKT 钱包 KeyStore 至输入框" className="tabsTextarea" v-model="currentValue" @input="inputChange"/>
                    <btn btnTitle="导入" className="walletBtn" @click="importKey"></btn>
                </div>
                <div class="tab-contents">
                    <p class="tab-contents-title">直接复制粘贴钱包私钥至输入框</p>
                    <my-input type="textarea" placeholder="输入 EKT KeyStore 内容 " className="tabsTextarea"/>
                    <my-input type="password" placeholder="请输入与此 KeyStore 一致的 KeyStore 密码" className="passMain"/>
                    <btn btnTitle="导入" className="walletBtn"></btn>
                </div>
            </tabs>
        </div>
    </div>
</template>
<script>
    import auth from '../util/auth';
    import * as Actions from '../store/constants';
    import { mapActions, mapMutations, mapState } from 'vuex';
    export default {
        name: 'importWallet',
        data() {
            return {
                tabs: [
                    {
                        label: "导入私钥"
                    },
                    {
                        label: "导入keyStore"
                    }
                ],
                currentValue: ''
            }
        },
        computed: {
            ...mapState([
                'ektAccount'
            ])
        },
        methods: {
            back() {
                this.$router.back();
            },
            importKey() {
                auth.verifyPri(this.currentValue, this.ektAccount.ektData.address, this).then(isRight => {
                    if (isRight) {
                        this[Actions.SET_PRI](this.currentValue);
                        this.$router.push('/settingKey');
                    }
                })
            },
            inputChange(e) {

            },
            ...mapActions([
                Actions.SET_PRI
            ]),
            ...mapMutations([
                Actions.SET_PRI
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
    .importWallet{
        .tab-contents{
            margin-top: 23px;
            padding: 0 20px;
            @include font-style(#b4b6bd, 13px);
            &-title{
                @include font-style(#b4b6bd, 13px);
                margin-bottom: 10px;
            }
            .tabsTextarea{
                height: 250px;
                @include box-shadow();
            }
            .passMain{
                margin-top: 12px;
            }
            .walletBtn{
                padding: 0 24px;
                margin-top: 32px;
            }
        }
    }
</style>
