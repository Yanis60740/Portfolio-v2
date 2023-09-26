<template>
    <div class="AboutMe">
            
    </div>
</template>

<script>
import jsonData from "../data.json";
import ContactButton from "./ContactButton.vue";
export default {
    name: 'AboutMe',
    components: {
        ContactButton,
    },
    data() {
        return {
            title: jsonData.title,
        };
    },
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
</style>