<template>
    <div class="ancre" id="contact-me"></div>
    <div class="footerVue">
        <div class="footerVue__banner" :class="[$store.getters.themeClassesInversed, $store.getters.themeClassesBorderInversed]">
            <div class="footerVue__banner__text" :class="$store.getters.themeClassesColor">
                Get in touch
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
                    <!-- <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mknlpvyl" method="post">
                        <fieldset id="fs-frm-inputs">
                            <div class="containerRight__fieldBox">
                                <input type="email" name="_replyto" id="email-address" placeholder="Email adress" required="">  
                            </div>
                            <div class="containerRight__fieldBox">
                                <input type="text" name="name" id="subject" placeholder="Subject" required="">
                            </div>
                            <div class="containerRight__fieldBox">
                                <input type="text" name="message" id="message" placeholder="Message" required="">
                            </div>
                        </fieldset>
                        <input type="submit" value="Submit">
                    </form> -->
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
                x: -textWidth*2.5, 
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
        margin-bottom: 5px;
        word-wrap: break-word;
        & input{
            background-color: $primary-color;
            border-radius: 5px;
            padding: 5px 5px; 
            word-wrap: break-word;
        }
        &:nth-child(3){
            & input{
                height: 60px;
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