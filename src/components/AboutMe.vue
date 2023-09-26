<template>
  <div class="aboutMe" id="about-me">
    <div class="sectionTitle">
      <h2>{{ section.name.toUpperCase() }}</h2>
    </div>
    <div class="aboutMe__box">
      <div class="aboutMe__content">
        <div class="aboutMe__content__left">
          <div></div>
        </div>
        <div class="aboutMe__content__right">
          <div v-for="accroche in section.accroche" :key="accroche">
            <h3>{{ accroche.toUpperCase() }}</h3>
          </div>
          <div v-for="paragraph in section.content" :key="paragraph">
            <p>{{ paragraph }}</p>
          </div>
          <div>
            <img :src="iconPath" alt="icon_localisation">
            <span>{{ section.localisation }}</span>
          </div>
          <div class="buttonBox"><ContactButton /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../data.json";
import ContactButton from "./ContactButton.vue";
export default {
  name: "AboutMe",
  components: {
    ContactButton,
  },
  data() {
    return {
      section: jsonData.sections[0],
      iconPath: require(`../assets/icones/${jsonData.sections[0].icon}`)
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";

.aboutMe {
  border-bottom: 1px solid $primary-color;
  &__content {
    display: flex;
    justify-content: space-between;
    width: 70%;
    &__left {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 40%;
      & div {
        background-image: url("../assets/images/illustration.svg");
        border-radius: 50%;
        aspect-ratio: 1/1;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 320px;
      }
    }
    &__right {
      width: 40%;
      color: #343434;
      padding: 50px 0;
      box-sizing: border-box;
      & h3{
        text-align: left;
        font-family: $dela-gothic;
        font-weight: 400;
        font-size: $small-size;
      }
      & p {
        text-align: left;
      }
      & div:nth-child(7) {
        display: flex;
        align-items: center;
        text-align: left;
      }
    }
    
    
  }
}

.aboutMe__box {
  display: flex;
  justify-content: center;
  width: 100%;
}

.buttonBox {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 95px 0;
  box-sizing: border-box;
}
</style>
