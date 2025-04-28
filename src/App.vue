<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <div class="header-container">
    <PageHeader />
  </div>

  <div class="content-container">
    <RouterView />
  </div>

  <div class="footer-container">
    <PageFooter />
  </div>
</template>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  background-color: #05051E;
  font-family: "Roboto Condensed";
}

.content-container {
  font-family: "Poppins";
}

.footer-container {
  font-family: "Inter";
}

@media (min-width: 1024px) {}
</style>
