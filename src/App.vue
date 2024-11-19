<template>
  <NavBar/>
  <HeroBanner/>
  <AboutMe/>
  <SkillsSection/>
  <WorkSection/>
  <FooterVue/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import AboutMe from './components/AboutMe.vue'
import SkillsSection from './components/SkillsSection.vue'
import WorkSection from './components/WorkSection.vue'
import FooterVue from './components/FooterVue.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    HeroBanner,
    AboutMe,
    SkillsSection,
    WorkSection,
    FooterVue
  }
}
</script>

<style lang="scss">
@import "./css/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
