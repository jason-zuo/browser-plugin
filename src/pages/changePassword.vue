<template>
    <div class="changePassword">
        <nav-bar titleName="设置钱包" @click="back"></nav-bar>
        <div class="changePassword-content">

        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    export default {
        name: 'changePassword',
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
            back() {
                this.$router.back();
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
    .changePassword{
        &-content{
            padding-top: 20px;
        }
    }
</style>
