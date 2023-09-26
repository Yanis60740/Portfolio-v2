<template>
    <div class="skillsSection">
        <div class="sectionTitle">
            <h2>{{ name.name.toUpperCase() }}</h2>
        </div>
        <div class="skillsSection__box">
            <div v-for="skill in processedSkills" :key="skill.name">
                <img :src="skill.icon" :alt="skill.name">
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
      section: jsonData,
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
      return [];  // return an empty array if skills is undefined
    }
}

};
</script>


<style lang="scss" scoped>
@import "../css/variables.scss";

.skillsSection{
    &__box{
        width: 100px;
        background-color: aqua;
    }
}
</style>