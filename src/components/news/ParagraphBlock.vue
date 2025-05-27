<script setup lang="ts">
interface Props {
  text: string
}
defineProps<Props>()
</script>

<template>
  <div class="paragraph" v-html="text"></div>
</template>

<style scoped>
.paragraph {
  font-family: 'Helvetica';
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0px;

  color: #000000;

  padding-bottom: 40px;
}
</style>
