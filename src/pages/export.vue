<template>
    <div class="export">
        <nav-bar titleName="转出EKT" @click="back"></nav-bar>
        <div class="export-content">
            <div class="export-content-main">
                <div class="main-ang">
                    <div class='angL'>
                    </div>
                    <div class='angC'>
                    </div>
                    <div class='angR'>
                    </div>
                </div>
                <span class="main-word">转入地址</span>
                <div class="main-content">
                    <p class="main-content-address">asdfasdfas</p>
                    <div class="qrcode">
                        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
                    </div>
                </div>
            </div>
            <btn btnTitle="复制地址" className="exportBtn"></btn>
        </div>
    </div>
</template>
<script>
    import QrcodeVue from 'qrcode.vue';
    export default {
        name: 'exportPage',
        data() {
            return {
                value: 'fasdfasd',
                size: 150
            }
        },
        computed: {

        },
        components: {
            QrcodeVue
        },
        methods: {
            back(){
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
    .export{
        &-content{
            width: 100%;
            padding: 0 20px;
            margin-top: 20px;
            overflow: hidden;
            &-main{
                width: 100%;
                height: 390px;
                position: relative;
                border-radius: 7px;
                background-color: #4c485e;

            }
            .main{
                &-ang{
                    position: absolute;
                    z-index: 10;
                    top: 0;
                    left:0;
                    right: 0;
                    text-align: center;
                    .angL,.angR
                    {
                        width:0px;
                        height:0px;
                        display: inline-block;
                        border-bottom:18px solid rgba(0,0,0,0);
                        border-right:18px solid  rgba(0,0,0,0);
                        border-top:18px solid #4c485e;
                        border-left:18px solid  rgba(0,0,0,0);
                    }
                    .angL{
                        transform: translate(22px,18px);
                    }
                    .angR{
                        transform: translate(-22px,18px);
                    }
                    .angC
                    {
                        display: inline-block;
                        width:104px;
                        height:18px;
                        background-color:#4c485e;
                    }
                }
                &-content{
                    position: absolute;
                    top: 20px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 3;
                    background-color: #ffffff;
                    padding-top: 42px;
                    &-address{
                        @include font-style(#3f4556, 14px);
                        text-align: center;
                    }
                    .qrcode{
                        text-align: center;
                        margin-top: 68px;
                    }
                }
                &-word{
                    @include font-style(#b4b6bd, 15px);
                    display: inline-block;
                    position: absolute;
                    text-align: center;
                    left: 0;
                    right: 0;
                    top: 10px;
                    z-index: 11;
                }
            }
        }
        .exportBtn{
            background-color: #43485d;
            color: $BTN_COLOR;
        }
    }
</style>
