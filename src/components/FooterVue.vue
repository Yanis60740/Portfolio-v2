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
                    <div class="containerLeft__content">
                        <div class="containerLeft__content__contact">
                            <div class="contact__title">
                                Contact
                            </div>
                            <div class="contact__content">
                                <span>{{ footerData.contact[0].mail }}</span><br>
                                <span>{{ footerData.contact[0].phone }}</span>
                            </div>
                        </div>
                        <div class="containerLeft__content__follow">
                            <div class="follow__title">
                                Follow me
                            </div>
                            <div class="follow__links">
                                <div v-for="item in followLinks" :key="item.name">
                                    <img :src="item.icon" :alt="item.name">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="containerRight"></div>
            </div>
            <div class="credits"></div>
        </div>
    </div>
</template>

<script>
import jsonData from "../data.json";
import gsap from "gsap";

export default {
    name: 'FooterVue',
    components: {},
    data() {
        return {
            footerData: jsonData.footer,
        };
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
    computed: {
        followLinks() {
        if (this.footerData && this.footerData.follow) {
            return this.footerData.follow.map(item => ({
            ...item,
            icon: require(`../assets/icones/${item.icon}`)
            }));
        }
        return [];
        }
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
            height: 400px;
            width: 73%;
            display: flex;
            justify-content: space-between;
        }
    }
}

.containerLeft{
    display: flex;
    justify-content: center;
    background: red;
    height: 100%;
    width: 450px;
    color: $secondary-color;
    &__content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        &__contact{
            height: 115px;
            display: flex;
            text-align: left;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
        }
        &__follow{
            font-family: $dela-gothic;
            text-transform: uppercase;
            height: 99px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    
}

.contact__title{
    font-family: $dela-gothic;
    text-transform: uppercase;
}
.contact__content{
    font-family: $open-sans;
    font-size: $paragraph-size;
    line-height: 37px;
}

.follow__title{
    font-family: $dela-gothic;
    text-transform: uppercase;
}
.follow__links{
    display: flex;
}

.containerRight{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(0, 219, 29);
    height: 100%;
    width: 450px;
    
}
</style>