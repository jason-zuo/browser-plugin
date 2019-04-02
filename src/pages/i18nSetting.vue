<template>
    <div class="i18n">
        <div class="ektNav">
            <Icon type="ios-arrow-back" class="back" @click="back"/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'container',
        data() {
            return {

            }
        },
        computed: {

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

</style>
