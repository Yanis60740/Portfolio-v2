<template>
  <div>
    <button class="contactButton"  @mouseover="hover" @mouseleave="unhover">
      <div class="contactButton__bg" ref="contactBg"></div>
      <div class="contactButton__text">
        <span class="firstSpan" ref="firstSp">GET IN TOUCH</span>
        <span class="secondSpan" ref="secondSp">GET IN TOUCH</span>
      </div>
    </button>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "ContactButton",
  data() {
    return {
        duration: 0.7,
    };
  },
  methods: {
    hover() {
        gsap.to(this.$refs.contactBg, {
        top: 0,
        duration: this.duration,
        // delay: 0.17,
        ease: "power2.out",
      });
      gsap.to(this.$refs.firstSp, {
        translateY: "-110%",
        duration: this.duration,
        // delay: 0.17,
        opacity: 0,
        ease: "power2.out",
      });
      gsap.to(this.$refs.secondSp, {
        translateY: "0%",
        duration: this.duration,
        opacity: 1,
        ease: "power2.out",
      });
      
    },
    unhover() {
      gsap.to(this.$refs.contactBg, {
        top: "100%",
        duration: this.duration,
        // delay: 0.17,
        opacity: 1,
        ease: "power2.out",
      });
      gsap.to(this.$refs.firstSp, {
        translateY: "0%",
        duration: this.duration,
        // delay: 0.17,
        opacity: 1,
        ease: "power2.out",
      });
      gsap.to(this.$refs.secondSp, {
        translateY: "110%",
        duration: this.duration,
        // delay: 0.26,
        opacity: 0,
        ease: "power2.out",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.contactButton {
  padding: 16px 40px;
  background: $gradient-color;
  border-radius: 56px;
  border: 1px solid #343434;
  overflow: hidden;
  position: relative;
  &__bg{
    background: $primary-color;
    width: 251.05px;
    left: 0;
    top: 100%;
    height: 66.4px;
    position: absolute;
}
  &__text {
    font-family: $open-sans;
    font-size: $small-size;
    font-weight: 700;
    color: $primary-color;
    display: flex;
    flex-direction: column;
  }
}

.secondSpan{
    position: absolute;
    transform: translateY(110%);
    color: $secondary-color;
    opacity: 0;
}
</style>
