<template>
    <div class="exportAddress">
        <nav-bar titleName="转出EKT"></nav-bar>
        <div class="exportAddress-content">
            <my-input placeholder="请输入对方 EKT 接受地址" type="textarea" className="addressInput"></my-input>
            <div class="btnNext">
                <btn btnTitle="下一步" className="btnNext-main"></btn>
            </div>
        </div>
        <toast toastTitle="请输入交易密码" :showToast="showToast">
            <div class="toast-success" slot="content">
                <p>jlajslkjf</p>
                <password-input></password-input>
            </div>

        </toast>
    </div>
</template>
<script>
    import passwordInput from '../components/passwordInput';
    export default {
        name: 'exportAddress',
        data() {
            return {
                showToast: false
            }
        },
        computed: {

        },
        components: {
            passwordInput
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
    .exportAddress{
        &-content{
            margin-top: 20px;
            padding: 0 20px;
            .addressInput{
                height: 75px;
            }
            .btnNext{
                margin-top: 62px;
                padding: 0 30px;
                &-main{

                }
            }
        }

    }
</style>
