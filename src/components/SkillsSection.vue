<template>
    <div class="ancre" id="skills"></div>
    <div class="skillsSection">
        <div class="sectionTitle">
            <h2>{{ name.name.toUpperCase() }}</h2>
        </div>
        <div class="skillsSection__box">
          <div class="skillsSection__box__container">
              <div v-for="skill in processedSkills" :key="skill.name">
                  <img :src="skill.icon" :alt="skill.name">
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import jsonData from "../data.json";

export default {
  name: "SkillsSection",
  data() {
    return {
      name:  jsonData.sections[1],
    };
  },
  computed: {
    processedSkills() {
      if (this.name && this.name.skills) {
        return this.name.skills.map(skill => ({
          ...skill,
          icon: require(`../assets/icones/${skill.icon}`)
        }));
      }
      return [];
    }
}

};
</script>


<style lang="scss" scoped>
@import "../css/variables.scss";
@import '../css/responsive.css';

.skillsSection{
  border-bottom: 1px solid $primary-color;
  &__box{
    height: 423px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__container{
        display: flex;
        & div{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 165px;
          width: 165px;
          border-radius: 90px;
          background: linear-gradient(to bottom, #CDB4FF, #F2F2F2);
          box-shadow: 6px 6px #343434;
          border: 1px $primary-color solid;
          margin-bottom: 10px;
        }
        & div:not(:first-child){
          margin-right: -25px;
        }
        & div:nth-child(2){
          margin-left: -25px;
        }
    }
  }
}

@media only screen and (max-width: 900px){
    .skillsSection{
      &__box{
        &__container{
          flex-wrap: wrap;
          & div{
            width: 120px;
            height: 120px;
          }
        }
      }
    }
}
</style>