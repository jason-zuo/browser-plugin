<template>
    <div class="linkItem"  @click="topClick">
        <slot name="leftContent"></slot>
        <i class="iconfont icon-fanhui"></i>
    </div>
</template>
<script>
    export default {
        name: 'linkItem',
        data() {
            return {

            }
        },
        props: {

        },
        computed: {

        },
        methods: {
            topClick(evt) {
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
    @import '../common/styles/index.scss';
    .linkItem{
        width:100%;
        height: 60px;
        background-color: #3f4556;
        border-radius: 7px;
        padding: 0 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include box-shadow();
        i{
            display: inline-block;
            @include font-style(#b49678, 13px);
            transform:rotateZ(180deg);
        }
    }

</style>
