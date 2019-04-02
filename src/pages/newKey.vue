<template>
    <div class="keyBoard">
        <div class="ektNav newEktNav">
            <i class="iconfont icon-shezhi" @click="toSetting"></i>
            <btn btnTitle="新建" className="newKey" @click.native="toNewKey" ></btn>
        </div>
        <div class="ektContent">
            {{ektAccount}}
            <div class="ektContent-list" v-for="item in ektAccount.keyList" v-if="ektAccount.length > 0">
                <listItem :content="item"></listItem>
            </div>
            <p class="placeHolder" v-if="ektAccount.keyList.length == 0">新建钱包导入私钥</p>
        </div>
    </div>
</template>
<script>
    import listItem from '@/components/tab.vue'
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '../store/constants';
    export default {
        name: 'keyBoard',
        components: {
            listItem
        },
        data() {
            return {
                list: []
            }
        },
        computed: {
            ...mapState([
                'ektAccount'
            ])
        },
        methods: {
            toNewKey() {
                this.$router.push('/settingKey')
            },
            toSetting() {
              this.$router.push('/setting')
            },
            ...mapActions([
                Actions.IMPORT_ACCOUNT
            ])
        },
        created() {
            this[Actions.IMPORT_ACCOUNT]().then(res => {
                console.log(this.ektAccount)
            })


        },
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss " type="text/scss">
    .keyBoard{
        .newKey{
            width: 60px !important;
        }
        .newEktNav{
            justify-content: space-between;
            i{
                font-size: 25px;
                cursor: pointer;
            }
        }
        .ektContent{
            &-list{
                box-sizing: border-box;
                padding: 0 40px;
            }
        }
        .placeHolder{
            font-size: 20px;
            text-align: center;
            margin: 30px auto;
        }
    }
</style>
