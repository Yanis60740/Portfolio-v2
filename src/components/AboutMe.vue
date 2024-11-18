<template>
  <div class="ancre" id="about-me"></div>
  <div class="aboutMe" :class="[$store.getters.themeClasses, $store.getters.themeClassesBorder]">
    <div class="sectionTitle" :class="[$store.getters.themeClasses, $store.getters.themeClassesBorder]">
      <h2 :class="$store.getters.themeClasses">{{ section.name.toUpperCase() }}</h2>
    </div>
    <div class="aboutMe__box">
      <div class="aboutMe__content">
        <div class="aboutMe__content__left">
          <div></div>
        </div>
        <div class="aboutMe__content__right" :class="$store.getters.themeClasses">
          <div v-for="accroche in section.accroche" :key="accroche">
            <h3 :class="$store.getters.themeClasses">{{ accroche.toUpperCase() }}</h3>
          </div>
          <div v-for="paragraph in section.content" :key="paragraph">
            <p>{{ paragraph }}</p>
          </div>
          <div>
            <div class="icon_localisation" :class="$store.getters.themeClassesPosition"></div>
            <span>{{ section.localisation }}</span>
          </div>
          <a href="#contact-me" class="buttonBox"><ContactButton /></a>
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
    font-family: $open-sans;
    font-size: $paragraph-size;
    &__left {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 40%;
      & div {
        background-image: url("../assets/images/yanis.jpg");
        border-radius: 50%;
        aspect-ratio: 1/1;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: grayscale(100%);
        width: 320px;
        cursor: pointer;
        transition: ease-in-out .4s;
      }

      & div:hover {
        transition: ease-in-out .4s;
        filter: none;
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
        margin-left: -5px;
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
  min-width: 194.97px;
  padding: 60px 0 0;
  box-sizing: border-box;
}

.icon_localisation{
    background: url("../assets/icones/position_icon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
}

@media only screen and (max-width: 570px){
  .aboutMe {
    &__content{
      flex-direction: column;
      align-items: center;
      &__left{
        padding-top: 30px;
        box-sizing: border-box;
        width: none;
      }
      &__right{
        width: 80%;
      }
    }
  }

  .buttonBox{
    padding: 15px 0 0;
  }
}

@media only screen and (min-width: 570px) and (max-width: 1100px){
  .aboutMe {
    &__content{
      width: unset;
      &__left{
        margin-left: 40px;
      }
      &__right{
        margin-right: 40px;
      }
    }
  }

  .buttonBox{
    padding: 15px 0 0;
  }
}
</style>
