<template>
  <div class="navContainer">
    <div class="navBar">
      <div class="navBar__logo"><a href="#index">YANIS ABID</a></div>
      <div class="navBar__links">
        <a
          v-for="section in sections"
          :key="section.name"
          :href="formatHref(section.name)"
        >
          {{ section.name.toUpperCase() }}
        </a>
        <a href="#contact-me">CONTACT ME</a>
        <!-- <div class="navBar__switch">
          <div class="navBar__switch__circle"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../data.json";
// import gsap from "gsap";
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      sections: jsonData.sections,
      // isSwitched: false,
    };
  },
  // mounted() {
  //   this.setupSwitchAnimation();
  // },
  methods: {
    formatHref(name) {
      return "#" + name.toLowerCase().split(" ").join("-");
    },
    // setupSwitchAnimation() {
    //   const switchButton = this.$el.querySelector(".navBar__switch");
    //   const switchCircle = this.$el.querySelector(".navBar__switch__circle");
    //   const duree = 0.4;
    //   switchButton.addEventListener("click", () => {
    //     this.isSwitched = !this.isSwitched;
    //     if (this.isSwitched) {
    //         console.log("switched");
    //       gsap.to(switchCircle, {
    //         x: "24px",
    //         duration: duree,
    //         ease : "power2.inOut",
    //         background: "#343434"
    //         });
    //         gsap.to(switchButton, {
    //             background: "linear-gradient(to bottom, #CDB4BF, #F2F2F2)",
    //             duration: duree,
    //             ease : "power2.inOut"
    //         });
    //     } else {
    //         console.log("no switch");
    //         gsap.to(switchCircle, {
    //         x: "1px",
    //         duration: duree,
    //         ease : "power2.inOut",
    //         background: "linear-gradient(to bottom, #CDB4BF, #F2F2F2)"
    //         });
    //         gsap.to(switchButton, {
    //             background: "#343434",
    //             duration: duree,
    //             ease : "power2.inOut"
    //         });
    //     }

        
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
@import '../css/responsive.css';
.navContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  padding: 16px 40px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  border-bottom: 1px solid $primary-color;
  background-color: $secondary-color;
  z-index: 100;
}
.navBar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: $small-size;
  max-width: 1840px;
  &__logo {
    color: $primary-color;
    font-family: $dela-gothic;
    font-weight: 400;
    text-align: left;
    & a {
      color: $primary-color;
    }
  }
  &__links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    & a {
      font-family: $open-sans;
      color: $primary-color;
      font-weight: 700;
    }
  }
  &__switch {
    width: 45px;
    height: 20px;
    background: $primary-color;
    position: relative;
    border-radius: 15px;
    cursor: pointer;
    &__circle {
      width: 18px;
      height: 18px;
      background: $gradient-color;
      border-radius: 50%;
      position: absolute;
      top: 1px;
      left: 1px;
    }
  }
}

@media only screen and (max-width: 900px){
  .navBar {
      font-size: 12px;
    }
}
</style>
