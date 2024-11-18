<template>
  <div class="cardProject">
    <a class="cardProject__box" :href=link>
      <div class="cardProject__box__illustration">
        <img :src="processedIcon" :alt="name" />
      </div>
      <div class="cardProject__box__text">
        <h3>{{ name }}</h3>
        <h4>{{ type }}</h4>
      </div>
    </a>
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
    link: {
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
    cursor: pointer;
    &__illustration{
      margin-bottom: 20px;
        & img{
            filter: grayscale(100%);
            transition: ease-in-out 0.4s;
            width: 100%;
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
            transition: ease-in-out 0.4s;
            filter: none;
        }
    }
}
</style>
