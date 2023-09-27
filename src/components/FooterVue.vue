<template>
    <div class="footerVue">
        <div class="footerVue__banner">
            <div class="footerVue__banner__text">
                Get in touch
            </div>
        </div>
        <div class="footerVue__box">
            <div class="footerVue__box__container">
                <div class="containerLeft">
                    <div class="containerLeft__title"></div>
                    <div class="containerLeft__contact"></div>
                    <div class="containerLeft__follow"></div>
                    <div class="containerLeft__followLinks"></div>
                </div>
                <div class="containerRight"></div>
            </div>
            <div class="credits"></div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";

export default {
    name: 'FooterVue',
    components: {
    },
    methods: {
        setupBannerAnimation() {
            let banner = document.querySelector('.footerVue__banner');
            let bannerText = document.querySelector('.footerVue__banner__text');
            let textWidth = banner.clientWidth;
            let tl = gsap.timeline({
                repeat: -1, 
                defaults: { ease: "linear" }
            });
            tl.to(bannerText, {
                x: -textWidth*1.4, 
                duration: 5, 
            });
        },
    },
    mounted() {
        this.setupBannerAnimation();
    },
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";

.footerVue{
    &__banner{
        width: 100%;
        height: 115px;
        overflow: hidden;
        background: $primary-color; /* or any other color */
        padding: 20px 0;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid $secondary-color;
        &__text{
            white-space: nowrap;
            position: absolute;
            left: 100%; /* start off the right side of the screen */
            color: $secondary-color;
            font-family: $dela-gothic;
            font-size: $title-size;
            text-transform: uppercase;
            margin: 0;
        }
    }
    &__box{
        height: 500px;
        background: $primary-color;
        display: flex;
        justify-content: center;
        align-items: center;
        &__container{
            background: blue;
            height: 350px;
            width: 73%;
            display: flex;
            justify-content: space-between;
        }
    }
}

.containerLeft{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: red;
    height: 100%;
    width: 350px;
}

.containerRight{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(0, 219, 29);
    height: 100%;
    width: 350px;
}
</style>