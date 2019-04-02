<template>
    <div class="settingKey">
        <nav-bar titleName="设置钱包密码"></nav-bar>
        <div class="settingKey-item settingKey-item-top">
            <my-input placeholder="请设置6位数字，作为钱包密码" :maxlength="6" v-model.number="password"></my-input>
        </div>
        <div class="settingKey-item">
            <my-input placeholder="请重复密码" :maxlength="6" v-model.number="rePassword"></my-input>
        </div>
        <btn btnTitle="完成" className="settingKey-btn" @click="postData"></btn>
    </div>
</template>
<script>
    import auth from '../util/auth';
    import utils from '@/util/utils'
    import { mapActions, mapMutations , mapState } from 'vuex'
    import * as Actions from '../store/constants';
    export default {
        name: 'settingKey',
        data() {
            return {
                password: null ,
                rePassword: null ,
                confirm: '保存'
            }
        },
        computed: {

        },
        methods: {
            back() {
                this.$router.back();
            },
            // confirmKey () {
            // //    生成公钥,
            //     if(utils.isRightPrivate(this.keyList.privateKey)) {
            //         this.keyList.address = utils.keyPairs(this.keyList.privateKey);
            //         console.log(this.keyList)
            //         this[Actions.Key_SAVE](this.keyList).then(() => {
            //             this.$router.back();
            //         })
            //
            //     }else  this.$Message.info('格式不正确')
            // },
            postData() {
                /**
                 * 验证密码输入之后，删除原有的storage，因为没有原有的密码只能删除，之后新建所有结构，并同步store
                 */
                if (auth.verifyPassword(this.password, this.rePassword, this)){
                    this[Actions.RESET_ACCOUNT](this.password).then((res) => {
                        this.$router.push('/mainPage')
                    })
                }
            },
            ...mapActions([
                Actions.Key_SAVE,
                Actions.RESET_ACCOUNT
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
    .settingKey{
        padding: 0 20px;
        &-item{
            margin: 12px 0;
            &-top{
                padding-top: 10px;
            }
        }
        &-btn{
            margin-top: 45px;
        }
    }
</style>
