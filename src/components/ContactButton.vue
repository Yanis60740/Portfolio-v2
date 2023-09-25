<template>
    <div>
        <button class="contactButton">
            <span class="contactButton__text">GET IN TOUCH</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ContactButton',
    components: {
    }
}
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
.contactButton{
    padding: 16px 40px;
    background: $gradient-color;
    border-radius: 56px;
    border: 1px solid #343434;
    &__text{
        font-family: $open-sans;
        font-size: $small-size;
        font-weight: 700;
        color: $primary-color;
    }
}
</style>