<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'

const array = ['about', 'mission', 'vision']
const selected = ref('about')

const selectAbout = computed(() => {
  return selected.value == 'about' ? true : false
})
const selectMission = computed(() => {
  return selected.value == 'mission' ? true : false
})
const selectVision = computed(() => {
  return selected.value == 'vision' ? true : false
})

let idx = 0
let timer: number = -1
const startTimer = () => {
  timer = setInterval(() => {
    idx = (idx + 1) % array.length
    selected.value = array[idx]
  }, 10000) // 10秒切换一次
}

function clickCard(which: string) {
  clearInterval(timer)

  selected.value = which
  idx = array.indexOf(which)
  startTimer()
}

onMounted(startTimer)
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="content-container">
    <!-- 第一列 -->
    <div class="tabs">
      <div class="tab" @click="clickCard('about')">
        <div class="title" :class="{ 'title-selected': selectAbout }">About Us</div>
        <div class="explain" :class="{ 'explain-selected': selectAbout }">
          Climate Resilience and Sustainability
        </div>
      </div>

      <div class="tab" @click="clickCard('mission')">
        <div class="title" :class="{ 'title-selected': selectMission }">Our Mission</div>
        <div class="explain" :class="{ 'explain-selected': selectMission }">
          Focus on climate change action and innovation
        </div>
      </div>

      <div class="tab" @click="clickCard('vision')">
        <div class="title" :class="{ 'title-selected': selectVision }">Our Vision</div>
        <div class="explain" :class="{ 'explain-selected': selectVision }">
          Empowering Every Data Journey
        </div>
      </div>
    </div>

    <!-- 第二列 -->
    <div class="detail">
      <div class="image">
        <img src="/images/about/cover.png" class="cover" />
      </div>
      <!-- <Transition> -->
      <div v-if="selectAbout" class="text">
        <span>The Otto Poon Centre for Climate Resilience and Sustainability at HKUST</span> is
        strategically positioned to be a pivotal force in the advancement of climate resilience and
        sustainability knowledge and technology.
        <br />
        The Centre fosters a collaborative environment that bridges internal faculty with leading
        external experts globally.
      </div>
      <div v-else-if="selectMission" class="text">
        Our mission is to catalyse significant advancements not only within Hong Kong but also to
        establish the Centre as a premier global hub for climate action and innovation.
        <br />
        The Centre is designed to aggregate resources, expertise, and missions focused on climate
        change action, with a particular emphasis on delivering technological solutions that can be
        rapidly implemented to address urgent environmental challenges.
      </div>
      <div v-else-if="selectVision" class="text">
        The Centre will capitalize on the influential role of both the newly established
        <span>WORLD SUSTAINABLE DEVELOPMENT INSTITUTE (WSDI)</span> in international climate policy
        and technology forums and
        <span>DIGITAL METEOROLOGICAL SERVICES AND INNOVATION LAB at HKUST Shanghai Centre</span>
        in close collaboration with state agencies and organizations.
      </div>
      <!-- </Transition> -->
    </div>
  </div>

  <div class="divider"></div>
</template>

<style scoped>
.content-container {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
  margin-bottom: 50px;
  border-left: 1.5px solid #dddfdd;
  /* justify-content: space-between; */
}

.tabs {
  border-right: 1.5px solid #dddfdd;
}

.tab {
  border-bottom: 1.5px solid #dddfdd;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: 40px;
  margin-right: 58px;
  transition: background-color 0.3s ease;
  width: 288px;
}

.tab:hover {
  background-color: #f5f5f5;
}
.title {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #000000;

  padding-bottom: 16px;
}

.title-selected {
  color: #4e07d8;
}

.explain {
  position: relative;

  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #000000;
}

.explain-selected {
  position: relative;
}

.explain-selected::before {
  content: '';
  position: absolute;
  left: -40px;
  top: 0;
  height: 100%;
  width: 6px;
  background: #4e07d8;
}

.detail {
  padding-left: 60px;
}

.cover {
  width: 100%;
  object-fit: cover;
}

.text {
  padding-top: 50px;
  padding-bottom: 50px;

  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0px;
  color: #000000;
}

.text > span {
  font-weight: 700;
  color: #000000;
}

/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */

.divider {
  border-bottom: 1.5px solid #dddfdd;
  width: min(1380px, 100%);
  height: 0;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 50px;
}

@media (min-width: 1024px) {
  .content-container {
    display: flex;
  }
}
</style>
