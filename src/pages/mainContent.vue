<template>
    <div class="passMain">
        <div class="password" v-if="!ektAccount.ektData.realAccount">
            <section class="password-content">
                <p class="password-content-title">创建钱包</p>
                <div class="content-item">
                    <label for="password" >请设置6位数字，作为钱包密码</label>
                    <input type="password" id="password" maxlength="6" v-model.number="password" />
                </div>
                <div class="content-item">
                    <label for="confirm">请重复钱包密码</label>
                    <input type="password" id="confirm" maxlength="6" v-model.number="rePassword" />
                </div>
                <div class="content-confirm">
                    <div class="confirm-checkbox checkboxFour" id="checkboxFour">
                        <input type="checkbox" v-model="checkStatus" id="checkboxFourInput" />
                        <label for="checkboxFourInput"></label>
                    </div>
                    <p>我已经阅读并同意<span>使用条款</span></p>
                </div>
                <btn @click="create" btnTitle="创建钱包" :buttonDisabled="!checkStatus"></btn>
            </section>
            <div class="password-put" >
                <btn @click="importKey" btnTitle="导入钱包" className="import-btn" ></btn>
            </div>
        </div>
        <div class="password" v-else>
            <section class="password-content">
                <p class="password-content-title">登录钱包</p>
                <p class="password-content-address">{{ektAccount.ektData.address | useStar}}</p>
                <div class="content-item">
                    <label for="password" >输入钱包密码，解锁钱包</label>
                    <input type="password" id="password" maxlength="6" v-model.number="password"/>
                </div>
                <btn @click="unLock" btnTitle="登录" className="loginBtn"></btn>
            </section>
            <div class="password-put forget-put" >
                <div class="forget-put-inner">
                    <p class="forget">忘记密码? 可导入私钥重置密码</p>
                    <p class="importKey" @click="importKey">导入私钥</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import btn from '../components/button.vue'
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '../store/constants';
    import auth from '../util/auth'
    import storage from '../util/storage'
    export default {
        name: 'password',
        components: {
            btn
        },
        data() {
            return {
                password: '',
                rePassword: '',
                checkStatus: true,
                show: 1,
                buttonDisabled: true
            }
        },
        computed: {
            ...mapState([
                'ektAccount'
            ])
        },
        methods: {
            importKey() {

            },
            havaDate () {
                storage.get().then(res => {
                    if (res){
                        this.show = 2;
                        return true;
                    }
                    else this.show = 1

                })
            },
            create () {
                if (auth.verifyPassword(this.password, this.rePassword, this)){
                    this[Actions.CREATE_DATA](this.password).then((res) => {
                        this.$router.push('/successPage')
                    })
                }

            },
            unLock () {

                auth.verifyRight(this.password, this).then(res => {
                    if (res) this.$router.push('/mainPage');
                })
            },
            importKey() {
                this.$router.push('/myImport');
            },
            ...mapActions([
                Actions.CREATE_DATA,
                Actions.SET_SEED,
                Actions.LOCK_STATUS,
                Actions.LOAD_EKT,
                Actions.IMPORT_ACCOUNT
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
    $bg: '../assets/img/loginBg.png';
    $bootmBtn: #364556;
    $bottomFont: #b4b6bd;
    .password{
        position: relative;
        padding: 0 20px;
        &-content{
            width: 100%;
            margin-top: 57px;
            padding: 25px 35px;
            @include bg-img($bg);
            &-title{
                @include font-style(#ffffff, 28px, 600);
                margin-bottom: 6px;
            }
            &-address{
                @include font-style(#ffffff, 15px, 500);
                margin-bottom: 31px;
                margin-top: 31px;
            }
            .content-item{
                margin-top: 27px;
                label{
                    @include font-style($CREATELABEL, 14px);
                }
                input{
                    margin-top: 12px;
                    width: 100%;
                    height: 40px;
                    padding: 0 15px;
                    line-height: 40px;
                    background-color: $DEFAULT_COLOR;
                    @include font-style(#ffffff, 14px);
                }
            }
            .content-confirm{
                margin-top: 28px;
                margin-bottom: 40px;

                p{
                    @include font-style(#ffffff, 14px);
                    display: inline-block;
                    span{
                        display: inline-block;
                        margin-left: 2px;
                        @include font-style($BTN_COLOR, 14px);
                    }
                }
            }
            .checkboxFour {
                width: 14px;
                height: 14px;
                display: inline-block;
                vertical-align: middle;
                background: #ffffff;
                border-radius: 100%;
                position: relative;
                -webkit-box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
                -moz-box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
                box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
            }
            .checkboxFour label {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 100px;

                -webkit-transition: all .5s ease;
                -moz-transition: all .5s ease;
                -o-transition: all .5s ease;
                -ms-transition: all .5s ease;
                transition: all .5s ease;
                cursor: pointer;
                position: absolute;
                top: 2px;
                left: 2px;
                z-index: 1;

                background: #ffffff;

                -webkit-box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);
                -moz-box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);
                box-shadow:inset 0px 1px 3px rgba(0,0,0,0.5);
            }
            .checkboxFour input[type=checkbox]:checked + label {
                background: $BTN_COLOR;
            }
        }
        &-put{
            padding: 0 10px;
            .import-btn{
                background-color:$bootmBtn;
                color: $bottomFont;
            }
        }
        .loginBtn{
            margin-top: 34px;
            margin-bottom: 70px;
        }
        .forget-put{
            width: 100%;
            &-inner{
                width: 100%;
                text-align: center;
                overflow: hidden;
                padding: 0 10px;
                background-color: $bootmBtn;
                .forget{
                    color: $bottomFont;
                    font-size: 14px;
                    margin-top: 45px;
                }
                .importKey{
                    font-size: 15px;
                    color: #ffffff;
                    margin-bottom: 30px;
                    margin-top: 14px;
                    cursor: pointer;
                }
            }
        }

    }
</style>
