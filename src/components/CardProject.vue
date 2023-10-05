<template>
  <div class="cardProject">
    <div class="cardProject__box">
      <div class="cardProject__box__illustration">
        <img :src="processedIcon" :alt="name" />
      </div>
      <div class="cardProject__box__text">
        <h3>{{ name }}</h3>
        <h4>{{ type }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../data.json";

export default {
  name: "CardProject",
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {
      cardIcon: jsonData.sections[2],
    };
  },
  computed: {
    processedIcon() {
      return require(`../assets/images/${this.icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
@import '../css/responsive.css';

.cardProject {
  background: #343434;
  width: 440px;
  padding: 1px;
  box-sizing: border-box;
  margin-bottom: 60px;
  &__box {
    border-radius: 15px;
    background: $secondary-color;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
    &__illustration{
      margin-bottom: 20px;
        & img{
            filter: grayscale(100%);
            transition: filter 0.3s;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            object-fit: cover;
            aspect-ratio: 2/1;
        }
    }
    &__text{
        text-align: left;
        color: $primary-color;
        border-top: 2px solid $primary-color;
    }
  }
  &__box:hover{
        & img{
            filter: grayscale(0%);
        }
    }
}
</style>
