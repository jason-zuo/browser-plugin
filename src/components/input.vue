<template>
    <div class="inputwrap">
        <input
                :type="type"
                :placeholder="placeholder"
                v-model="temp_value"
                :maxlength="maxlength"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                v-if="type != 'textarea'"
                :class="[className]"
                class="myInput"/>
        <textarea
            v-else
            class="myInput"
            v-model="temp_value"
            :placeholder="placeholder"
            @input="handleInput"
            ref="textarea"
            :class="[className]"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
        >
        </textarea>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                temp_value: this.value
            }
        },
        computed: {

        },
        watch: {
            value(val, oldVal) {
                this.temp_value = val
            },
            temp_value (val, oldVal) {
                this.$emit('input' , val)
            }
        },
        props: {
            placeholder: {
                default: ''
            },
            type: {
                default: 'password'
            },
            maxlength: {
                type: Number
            },
            className: {
                default:''
            },
            value: {
                type: [String, Number],
                default: ''
            }

        },
        methods: {
            handleInput(evt) {
                this.$emit('handleInput', evt)
            },
            handleFocus(evt) {
                this.$emit('handleFocus', evt)
            },
            handleChange(evt) {
                this.$emit('handleChange', evt)
            },
            handleBlur(evt) {
                this.$emit('handleBlur', evt)
            },
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style lang="scss">
    @import '../common/styles/index.scss';
    .inputwrap{
        /*display: block !important;*/
    }
    .myInput{
        width: 100%;
        height: 40px;
        line-height:40px;
        padding: 0 10px;
        border-radius: 4px;
        background-color: #3c4152;
        @include box-shadow();
        resize: none;
        @include font-style(#ffffff, 15px);
    }
    input::-webkit-input-placeholder {

        @include font-style(#8c909c, 14px);
    }
</style>
