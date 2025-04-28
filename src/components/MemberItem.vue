<script setup lang="ts">
defineProps({
    homePage: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <div class="a-member">
        <div class="photo">
            <a v-if="homePage" :href="homePage">
                <slot name="photo"></slot>
            </a>
            <div v-else>
                <slot name="photo"></slot>
            </div>
        </div>

        <div class="name">
            <slot name="name"></slot>
        </div>

        <div class="intro">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.a-member {
    width: 234px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.photo {
    width: 100%;
    border-radius: 16px;
}

.name {
    padding-top: 20px;
    padding-left: 20px;

    font-weight: 600;
    font-size: 32px;
    /* line-height: 100%; */
    letter-spacing: 0;
    color: #FFFFFF;
}

.intro {
    padding-top: 4px;
    padding-left: 20px;

    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0;
    color: #FFFFFF;
}
</style>
