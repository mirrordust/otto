<script setup lang="ts">
defineProps({
  homePage: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    requird: true,
  },
  name: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="a-member">
    <div class="photo">
      <a v-if="homePage" :href="homePage">
        <img :src="photo" class="cover" />
      </a>
      <div v-else>
        <img :src="photo" class="cover" />
      </div>
    </div>

    <div class="caption">
      <div class="name">{{ name }}</div>
      <div class="area" v-html="intro"></div>
    </div>
  </div>
</template>

<style scoped>
.a-member {
  position: relative;

  width: 232px;
  height: 320px;

  border-radius: 16px;
  overflow: hidden;
}

.cover {
  width: 100%;
  object-fit: cover;
}

.name {
  padding-top: 16px;
  padding-left: 16px;

  font-weight: 600;
  font-size: 24px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #ffffff;
}

.area {
  padding-top: 4px;
  padding-left: 16px;
  padding-bottom: 16px;

  font-weight: 400;
  font-size: 16px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #ffffff;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translateY(100%);
}

.a-member:hover .caption {
  opacity: 1;
  transform: translateY(0);
}
</style>
