<template>
    <div class="containers">
        <router-view />
    </div>
</template>
<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '@/store/constants'
    export default {
        name: 'container',
        data() {
            return {

            }
        },
        computed: {
            ...mapState([
                'ektAccount'
            ])
        },
        methods: {
            ...mapActions([
                Actions.LOCK_STATUS,
                Actions.LOAD_EKT,
            ])
        },
         created() {
            /*作为所有路由页面的基页*/
             this[Actions.LOAD_EKT]().then(() => {
               this[Actions.LOCK_STATUS]().then(unlocked => {
                   if(unlocked)
                       this.$router.push('/main');
                   else this.$router.push('/mainPage');
               });
            })


        },
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../common/styles/index.scss';
    //nav公共样式
    .ektNav{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        padding: 0 30px;
        border-bottom: 1px solid #e7e1cd;

    }
    .vue-Message.bottom{
        top: 50% !important;
        bottom: auto !important;
    }
</style>
