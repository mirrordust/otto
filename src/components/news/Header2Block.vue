<script setup lang="ts">
interface Props {
  text: string
}
defineProps<Props>()
</script>

<template>
  <div class="header2" v-html="text"></div>
</template>

<style scoped>
.header2 {
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 32px;
  /* line-height: 100%; */
  letter-spacing: 0px;

  color: #000000;

  padding-bottom: 16px;
}
</style>
