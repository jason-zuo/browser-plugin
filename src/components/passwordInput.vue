<template>
    <div class="passwordInput">
        <div class="passwordInput-container">
            <input class="psd-input" type="password"   v-model="passValue"  :maxlength="putNum" @change="changeList" @input="changeList">
            <ul>
                <li class="view" v-for="(item, index) in putNum">
                    <span class="circle" v-if="index < showIcon"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "passwordInput",
        data () {
            return{
                passValue: '',
                valueList: [],
                showIcon: 0

            }
        },
        props: {
            putNum : {
                default: 6
            }
        },
        components: {

        },
        methods: {
            changeList(evt) {
                this.showIcon = this.passValue.length
            }
        },
        created(){

        },
        mounted() {

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../common/styles/index.scss';
.passwordInput{
    &-container{
        position: relative;
        border-radius: 5px;
        overflow: hidden;
    }
    .psd-input{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: inline-block;
        width: 100%;
        margin: auto;
        z-index: 999;
        opacity: 0;
        color: transparent;
    }
    ul{
        width: 100%;
        background-color: #43485d;
        display: flex;
        height: 50px;
        li{
            display: inline-block;
            flex: 1;
            position: relative;
            border-right: 1px solid #343849;
            @include font-style(#ffffff, 18px);
            .circle{
                width: 16px;
                height: 16px;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                background-color: #ffffff;
                border-radius: 50%;
                text-align: center;
            }
        }
        li:nth-last-child{
            border-right: none;
        }
    }
}
</style>
