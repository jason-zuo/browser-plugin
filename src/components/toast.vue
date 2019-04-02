<template>
    <div class="shadow" v-if="showToast">
        <div class="toast">
            <p class="toast-title">{{toastTitle}}</p>
            <div class="toast-content">
                <slot name="content"></slot>
            </div>
            <div class="toast-bottom">
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'toast',
        data() {
            return {

            }
        },
        props: {
            toastTitle: {
                default: ''
            },
            showToast: {
                default: false
            }
        },
        computed: {

        },
        methods: {

        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../common/styles/index.scss';
    .shadow{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    .toast{
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #343849;
        border-radius: 4px;
        &-title{
            @include font-style(#ffffff, 15px);
            width: 100%;
            text-align: center;
            line-height: 40px;
            height: 40px;
        }
        &-content{
            padding: 12px 13px;
            background-color: #343849;
        }
        &-bottom{

        }
    }
</style>
