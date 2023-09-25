<template>
  <section class="heroBanner">
    <div class="heroBanner__container">
      <div class="heroBanner__container__left">
        <h1>{{ title.toUpperCase() }}</h1>
        <ContactButton />
      </div>
      <div class="heroBanner__container__right">
        <div class="bg">
          <div></div>
        </div>
        <div class="bg">
          <div></div>
        </div>
        <div class="bg">
          <div class="">
            <div class="smiley__box" ref="smiley">
              <img src="../assets/icones/smiley.svg" alt="" />
              <div class="eye" ref="eye"></div>
            </div>
          </div>
        </div>
        <div class="bg">
          <div>
            <img src="../assets/icones/internet.svg" alt="" ref="internet" />
          </div>
        </div>
        <div class="bg">
          <div>
            <img src="../assets/icones/hi.svg" alt="" ref="hi" />
          </div>
        </div>
        <div class="bg">
          <div>
            <img src="../assets/icones/rectangle.svg" alt="" />
          </div>
        </div>
        <div class="bg">
          <div>
            <img src="../assets/icones/crochets.svg" alt="" />
          </div>
        </div>
        <div class="bg">
          <div></div>
        </div>
        <div class="bg">
          <div>
            <img src="../assets/icones/github.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from "../data.json";
import ContactButton from "./ContactButton.vue";
import gsap from "gsap";
export default {
  name: "NavBar",
  components: {
    ContactButton,
  },
  data() {
    return {
      title: jsonData.title,
    };
  },
  methods: {
    setupHiAnimation() {
      const smiley = this.$refs.smiley;
      const eye = this.$refs.eye;
      const hi = this.$refs.hi;
      const internet = this.$refs.internet;
      const duree = 2.5;
      gsap.to(smiley, {
        rotation: -30,
        delay: 1,
        duration:0.5,
        repeatDelay: 0.8,
        ease: "powscale2.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(eye, {
        borderRadius: "2px",
        delay: 1,
        repeatDelay: 0.8,
        scaleX: 1.3,
        scaleY: 0.5,
        duration: 0.5,
        ease: "powscale2.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(hi, {
        scale: 1,
        duration: duree,
        repeatDelay: 0.8,
        ease: "elastic.out(1.4, 0.7)",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(internet, {
        rotationY: 360,

        duration: duree,
        repeat: -1,
        ease: "power2.inOut",
        yoyo: true,
      });
    },
  },
  mounted() {
    this.setupHiAnimation();
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";

.heroBanner {
  display: flex;
  justify-content: center;
  margin-top: 69px;

  &__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    &__left {
      width: 300px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & h1 {
        margin-bottom: 96px;
      }
    }
    &__right {
      display: flex;
      width: 246px;
      flex-wrap: wrap;
      height: max-content;
    }
  }
}

.bg {
  width: 80px;
  height: 80px;
  background: #323232;
  padding: 1px;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: $secondary-color;
  }
  &:nth-child(1) {
    transform: translateY(-50%);
    & div {
      background: linear-gradient(180deg, #cdb4ff 0%, #f2f2f2 100%);
    }
  }
  &:nth-child(3) {
    transform: translateX(50%);
  }
  &:nth-child(4) {
    transform: translateX(-100%);
  }
  &:nth-child(5) {
    & img {
      scale: 0;
    }
  }
  &:nth-child(8) {
    transform: translateY(50%);
    & div {
      background: radial-gradient(circle at center, #f2f2f2 20%, #cdb4ff 100%);
    }
  }

  &:nth-child(9) {
    transform: translateX(100%) translateY(50%);
  }
}

.smiley__box {
  position: relative;
  width: max-content !important;
    height: max-content !important;
  & .eye {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #cdb4ff;
    border-radius: 50%;
    top: 37.5%;
    left: 65%;
    transform: translate(-50%, -50%);
  }
}
</style>
