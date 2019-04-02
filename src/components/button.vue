<template>
    <button
        @click="handleClick"
        :disabled="buttonDisabled"
        type="button"
        :style="`height: ${height}; fontSize: ${fontSize}`"
        :class="[className, 'chain-button']">
        {{btnTitle}}
    </button>
</template>
<script>
    export default {
        name: 'btn',
        data() {
            return {}
        },
        props: {
            btnTitle: {
                default: ''
            },
            className: {
                default: ''
            },
            buttonDisabled: {
                default: false,
                type: Boolean
            },
            buttonSize: {
                default: "14px"
            },
            height: {
                default: "50px"
            },
            fontSize: {
                default: "15px"
            }
        },
        computed: {},
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss">
    @import '../common/styles/index.scss';
    .chain-button{
        width: 100%;
        cursor: pointer;
        color:$FONT_COLOR;
        border-radius: 3px;
        background-color: $BTN_COLOR;
    }
    .chain-button:disabled{
        background-color: #474958;
        color: #34384a;
    }
</style>
