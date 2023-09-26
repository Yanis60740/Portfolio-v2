<template>
  <div class="aboutMe">
    <div class="aboutMe__title">
      <h2>{{ section.name.toUpperCase() }}</h2>
    </div>
    <div class="aboutMe__box">
      <div class="aboutMe__content">
        <div class="aboutMe__content__left">
          <div></div>
        </div>
        <div class="aboutMe__content__right">
            <div v-for="accroche in section.accroche" :key="accroche">
            <h3>{{ accroche }}</h3>
          </div>
          <div v-for="paragraph in section.content" :key="paragraph">
            <p>{{ paragraph }}</p>
          </div>
          <div>
            <img :src="iconPath" alt="icon_localisation">
            
            <span>{{ section.localisation }}</span>
        </div>
          <div><ContactButton /></div>
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
      title: jsonData.title,
      section: jsonData.sections[0],
      iconPath: require(`@/assets/icones/${jsonData.sections[0].icon}`)
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";

.aboutMe {
  &__title {
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px solid $primary-color;
  }
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
      background-color: aqua;
      width: 40%;
      color: $primary-color;
      & h3{
        text-align: left;
        font-family: $dela-gothic;
        font-weight: 400;
        font-size: $small-size;
      }
      & p {
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
</style>
