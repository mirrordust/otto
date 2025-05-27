<script setup lang="ts">
interface Props {
  url: string
  caption?: string
}
defineProps<Props>()
</script>

<template>
  <div class="image">
    <img :src="url" class="cover" />
    <div v-if="caption" class="caption" v-html="caption"></div>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  padding-bottom: 32px;
}

.cover {
  width: 100%;
  height: auto;
}

.caption {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0px;

  color: #7f7f7f;

  padding-top: 16px;
}
</style>
