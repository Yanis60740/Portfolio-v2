<template>
    <div class="ancre" id="contact-me"></div>
    <div class="footerVue">
        <div class="footerVue__banner" :class="[$store.getters.themeClassesInversed, $store.getters.themeClassesBorderInversed]">
            <div class="footerVue__banner__text" :class="$store.getters.themeClassesColor">
                <div class="footerVue__banner__text__carrousel">Get in touch</div>
                <div class="footerVue__banner__text__carrousel"  aria-hidden="true">Get in touch</div>
                <div class="footerVue__banner__text__carrousel"  aria-hidden="true">Get in touch</div>
                <div class="footerVue__banner__text__carrousel"  aria-hidden="true">Get in touch</div>
                <div class="footerVue__banner__text__carrousel"  aria-hidden="true">Get in touch</div>
                
            </div>
        </div>
        
        <div class="footerVue__box" :class="[$store.getters.themeClassesInversed, $store.getters.themeClassesBorderInversed]">
            <div class="footerVue__box__container" :class="$store.getters.themeClassesColor">
                <div class="containerLeft" :class="$store.getters.themeClassesColor">
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
                                <a href="https://github.com/Yanis60740"><div class="github" :class="$store.getters.themeClassesGithub"></div></a>
                                <a href="https://www.linkedin.com/in/yanis-abid-418020263/"><div class="linkedin" :class="$store.getters.themeClassesLinkedin"></div></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="containerRight">
                    <a href="mailto:yanisabid80000@gmail.com">
                        <ContactButton />
                    </a>
                </div>
            </div>
        </div>
        <div class="credits" :class="[$store.getters.themeClassesInversed]">
            <div class="credits__content" :class="[$store.getters.themeClassesColor]">
                Developed by <b>Yanis Abid</b> • Designed by <b>Noémie Heuzé</b>
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from "../data.json";
import ContactButton from "./ContactButton.vue";
import gsap from "gsap";

export default {
    name: 'FooterVue',
    components: {
        ContactButton,
    },
    data() {
        return {
            footerData: jsonData.footer,
            bannerWidth: null,
            carrouselFooterWidth: null,
        };
    },
    mounted() {
        this.startCarouselFooter();
    },
    methods: {
        startCarouselFooter() {
            this.bannerWidth = document.querySelector(".footerVue__banner").offsetWidth;
            this.carrouselFooterWidth = document.querySelector(".footerVue__banner__text__carrousel").offsetWidth;
            console.log(this.bannerWidth);
            console.log(this.carrouselFooterWidth);
            gsap.set(".footerVue__banner__text__carrousel", {
                x: (i) => -i * (this.carrouselFooterWidth + 150),
                right: -this.carrouselFooterWidth -70,
            });
            gsap.to(".footerVue__banner__text__carrousel", {
                duration: 15,
                ease: "none",
                x: `-=` + ((this.carrouselFooterWidth * 5) + 750),
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % ((this.carrouselFooterWidth * 5) + 750)),
                },
                repeat: -1
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
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";

.footerVue{
    &__banner{
        // width: 100%;
        height: 115px;
        overflow: hidden;
        background: $primary-color; /* or any other color */
        padding: 20px 0;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid $secondary-color;
        &__text{
            white-space: nowrap;
            // position: absolute;
            // left: 100%; /* start off the right side of the screen */
            color: $secondary-color;
            font-family: $dela-gothic;
            font-size: $title-size;
            text-transform: uppercase;
            // margin: 0;
            position: relative;
            display: flex;
            &__carrousel {
                width: max-content;
                display: flex;
                position: absolute;
            }
        
        }
    }
    &__box{
        height: 500px;
        background: $primary-color;
        display: flex;
        justify-content: center;
        align-items: center;
        &__container{
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
    justify-content: center;
    height: 100%;
    width: 450px;
    &__fieldBox{
        background-color: $tertiary-color;
        padding: 1px;
        margin-bottom: 8px;
        word-wrap: break-word;
        & textarea{
            background-color: $primary-color;
            border-radius: 16px;
            padding: 17px; 
            word-wrap: break-word;
            width: 350px;
            max-width: 100%;
            height: 50px;
            max-height: 50px;
            white-space: pre-wrap;
            box-sizing: border-box;
            color: #F2F2F2;
            display: block;
        }   
        &:nth-child(3){
            & textarea{
                height: 120px;
                max-height: 240px;
            }
        }
        
    }
}

.github{
    background: url("../assets/icones/github_light.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
}

.linkedin{
    background: url("../assets/icones/linkedin_light.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
}

.credits{
    display: flex;
    justify-content: center;
    align-items: center;
    background: $primary-color;
    height: 40px;
    width: 100%;
    &__content{
        color: $secondary-color;
        font-family: $open-sans;
        font-size: $small-size;
    }
}

@media only screen and (max-width: 900px){
    .credits{
        &__content{
            font-size: 12px;
        }
    }
}

@media only screen and (max-width: 900px){
    .footerVue{
        &__box{
            &__container{
                width: unset;
                flex-direction: column;
            }
        }
    }
}

</style>