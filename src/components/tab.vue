<template>
    <div class="tabs">
        <div class="tabs-titles" ref="titles">
            <div class="title-item" @click="select(index)" v-for="(item, index) in tabs" :key="item.label" style="{}" :class="[index == tabIndex ? 'spColor' : '']">
                {{item.label}}
            </div>
            <div class="scroll-bar" ref="scrollBar" :style="{
                transform: `translate3d(${tabIndex * tabWidth + tabReduce}px, 0, 0)`}"/>
        </div>

        <div class="tabs-content"
             @touchstart="handleTouchstart"
             @touchmove="handleTouchmove"
             @touchend="handleTouchend"
        >
            <div class="wrapper" :style="{
				transform: `translate3d(${translateX - tabIndex * width}px, 0, 0)`,
				transition: touching ? '' : 'transform .3s'
			}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vue-slide-tabs",
        props: {
            tabs: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                tabIndex: 0,
                tabWidth: 0,
                touching: false,
                dx: 0,
                translateX: 0,
                width: 0,
                tabReduce: 0
            }
        },
        methods: {
            getAngle(dx, dy) {
                return 360 * Math.atan(dy / dx) / (2 * Math.PI);
            },
            select(index) {
                this.tabIndex = index;
            },
            handleTouchstart(e) {
                this.touching = true;
                this.startX = e.touches[0].pageX;
                this.startY = e.touches[0].pageY;
                this.endX = e.touches[0].pageX;
                this.endY = e.touches[0].pageY;
            },
            handleTouchmove(e) {
                const endX = e.touches[0].pageX;
                const endY = e.touches[0].pageY;
                const dx = this.dx = endX - this.startX;
                if (this.canSlider()) {
                    return;
                }
                if (Math.abs(dx) > 6 && Math.abs(this.getAngle(dx, endY - this.startY)) < 30) {
                    this.translateX = dx;
                }
            },
            handleTouchend() {
                this.touching = false;
                this.translateX = 0;
                const percent = this.dx / this.width;
                if (this.canSlider()) {
                    return;
                }
                if (percent < -0.3) {
                    this.tabIndex++;
                }

                if (percent > 0.3) {
                    this.tabIndex--;
                }
            },
            canSlider() {
                return (this.dx < 0 && this.tabIndex >= this.tabs.length - 1) || (this.dx > 0 && this.tabIndex === 0);
            },
            resizeWidth() {
                this.width = this.$el.clientWidth;
                this.tabWidth = Math.round(this.width / this.tabs.length);
                this.tabReduce = Math.round((this.tabWidth - 38) / 2);
                console.log(this.tabWidth)
                console.log(this.tabReduce)
            }
        },
        watch: {
            tabIndex(newVal) {
                this.$emit('change', newVal);
            }
        },
        mounted() {
            this.resizeWidth();
            window.addEventListener('resize', this.resizeWidth);
        },
        destroy() {
            window.removeEventListener('resize', this.resizeWidth);
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss " type="text/scss">
    @import '../common/styles/index.scss';
    $color-border : #caab7e;
    $color-theme : rgb(212, 68, 57);
    $font-size-base : 14px;
    .tabs-titles{
        &::after{
            content: '';
            position: absolute;
            bottom:  0 ;
            left: 0;
            right: 0;
            transform: translateY(0.5);
        }
    }


    .tabs{
        &-titles{
            position: relative;
            display: flex;
            line-height: 44px;
            text-align: center;
            .title-item{
                flex: 1;
                cursor: pointer;
                @include font-style(#b4b6bd, 15px);
            }
            .spColor{
                color: #ffffff;
            }
            .scroll-bar{
                width: 38px;
                position: absolute;
                bottom: 0;
                z-index: 1;
                border-bottom: 2px solid $color-theme;
                border-radius: 5px;
                transition: transform 0.3s;
            }
        }
         &-content{
            height: calc(100% - 44px);
            overflow: hidden;
            .wrapper{
                display: flex;
                font-size: 0;
                white-space: nowrap;
                div{
                    /*display: inline-block;*/
                    width: 100%;
                    flex-shrink: 0;
                    font-size: $font-size-base;
                }

            }

        }

    }

</style>
