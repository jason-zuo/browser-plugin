<template>
    <div class="navBar">
        <i class="iconfont icon-fanhui" @click="back"></i>
        <p class="navBar-content">{{titleName}}</p>
    </div>
</template>
<script>
    export default {
        name: 'navBar',
        data() {
            return {

            }
        },
        props: {
            titleName: {
                default: ''
            }
        },
        computed: {

        },
        methods: {
            back(evt) {
                this.$emit('click', evt);
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../../common/styles/index.scss';
    .navBar{
        width: 100%;
        height: 43px;
        display: flex;
        padding: 0 12px;
        align-items: center;
        background-color: $DEFAULT_COLOR;
        justify-content: space-between;
        position: relative;
        i{
            cursor: pointer;
            z-index: 999;
            position: absolute;
            display: inline-block;
        }
        p,i{
            display: inline-block;
            font-size: 15px;
            color: #ffffff;
        }
        &-content{
            position: absolute;
            left: 0 ;
            right:0;
            margin: auto;
            text-align: center;
            display: inline-block;
        }
    }
</style>
