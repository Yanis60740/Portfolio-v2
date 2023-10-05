<template>
    <div class="ancre" id="work"></div>
    <div class="workSection">
        <div class="sectionTitle">
            <h2>{{ projets.name.toUpperCase() }}</h2>
        </div>
        <div class="workSection__box">
            <div class="workSection__box__container">
                <CardProject 
                    v-for="projet in name" 
                    :key="projet.name" 
                    :name="projet.name" 
                    :type="projet.type" 
                    :icon="projet.icon" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from "../data.json";
import CardProject from "./CardProject.vue";

export default {
    name: "WorkSection",
    components: {
        CardProject
    },
  data() {
    return {
        projets: jsonData.sections[2],
        name: jsonData.sections[2].project,
    };
  }
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
@import '../css/responsive.css';

.workSection{
    border-bottom: 1px solid $primary-color;
    &__box{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 70px 0;
        &__container{
            border-radius: 22px;
            width: 75%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
}

</style>