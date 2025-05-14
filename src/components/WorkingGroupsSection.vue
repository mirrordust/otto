<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { getMembers, getExternalAdvisors } from '@/api/data'

import IconArrowLeft from './icons/IconArrowLeft.vue'
import IconArrowLeftDisabled from './icons/IconArrowLeftDisabled.vue'
import IconArrowRight from './icons/IconArrowRight.vue'
import IconArrowRightDisabled from './icons/IconArrowRightDisabled.vue'
import MemberItem from './MemberItem.vue'

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

// 防抖函数
// const debounceTimer = ref<number>()
// const handleResize2 = () => {
//   clearTimeout(debounceTimer.value)
//   debounceTimer.value = setTimeout(() => {
//     windowWidth.value = window.innerWidth
//   }, 100)
// }

const photoWidth = 232 // 照片宽度固定 232px
const gap = 20 // grid 列间距 20px
const calculatePerRow = computed(() => {
  if (windowWidth.value >= 1440) {
    return 5
  }
  // 计算可用空间：(总宽度 - 间距总和) / 单图宽度
  const availableWidth = windowWidth.value - 200 // grid 左右 padding 各为 100px
  const maxCount = Math.floor((availableWidth + gap) / (photoWidth + gap))
  return Math.max(1, maxCount) // 至少显示1张
})

const members = ref(getMembers())
const externalAdvisors = ref(getExternalAdvisors())
const start_idx = ref(0)
const span = computed(() => {
  return calculatePerRow.value * 2 // 显示 2 行
})

const leftEnd = computed(() => {
  return start_idx.value == 0 ? true : false
})
const rightEnd = computed(() => {
  return start_idx.value + span.value >= members.value.length ? true : false
})
function toLeft() {
  if (start_idx.value > 0) {
    start_idx.value -= span.value
    if (start_idx.value < 0) {
      start_idx.value = 0
    }
  }
}
function toRight() {
  if (start_idx.value + span.value < members.value.length) {
    start_idx.value += span.value
  }
}

// const visibleMembers = computed(() => {
//   return members.value.slice(start_idx.value, start_idx.value + span.value)
// })
const displayPhotos = computed(() => {
  const perRow = calculatePerRow.value
  return [
    members.value.slice(start_idx.value, start_idx.value + perRow), // 第一行
    members.value.slice(start_idx.value + perRow, start_idx.value + perRow * 2), // 第二行
  ]
})

onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <div class="content-container">
    <h3>Our Team</h3>

    <div class="parent">
      <h2>Working Groups</h2>

      <div class="nav">
        <span v-if="leftEnd" class="left">
          <IconArrowLeftDisabled class="svg" />
        </span>
        <span v-else class="left">
          <IconArrowLeft class="svg enabled" @click="toLeft" />
        </span>

        <span v-if="rightEnd" class="right">
          <IconArrowRightDisabled class="svg" />
        </span>
        <span v-else class="right">
          <IconArrowRight class="svg enabled" @click="toRight" />
        </span>
      </div>
    </div>

    <div class="photo-container">
      <div v-for="(row, index) in displayPhotos" :key="index" class="photo-row">
        <TransitionGroup name="list">
          <MemberItem
            v-for="member in row"
            :key="member.id"
            :photo="member.photo"
            :name="member.name"
            :intro="member.intro"
            :home-page="member.homePage"
            class="photo-item"
          />
        </TransitionGroup>
      </div>
    </div>

    <div class="external-parent">
      <h2>External Advisors</h2>
    </div>

    <div class="external-photo-container">
      <div class="photo-row">
        <MemberItem
          v-for="person in externalAdvisors"
          :key="person.id"
          :photo="person.photo"
          :name="person.name"
          :intro="person.intro"
          :home-page="person.homePage"
          class="photo-item"
        />
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
h3 {
  font-family: 'Noto Sans';
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4e07d8;

  padding-top: 120px;
  padding-left: 100px;
}

h2 {
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: 0px;
  color: #000000;
}

.nav {
  display: flex;
  gap: 32px;
}

.parent {
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 100px;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
}

/* .svg {
    display: block;
     width: auto;
    height: auto;
} */

.photo-container {
  padding: 80px 100px;
}

.photo-row {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.list-enter-active
/*, .list-leave-active */ {
  transition: all 0.5s ease;
}

.list-enter-from
/*, .list-leave-to */ {
  opacity: 0;
  /* transform: translateX(30px); */
}

.list-leave-active {
  position: absolute;
}

.external-parent {
  padding-left: 100px;
  padding-right: 100px;
}

.external-photo-container {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 40px;
  padding-bottom: 140px;
}

/* .left:hover {
  border: 1px solid #c83e22;
}

.right:hover {
  border: 1px solid #c83e22;
} */

.svg.enabled:hover {
  border: 1px solid transparent;
}

.divider {
  border-bottom: 1.5px solid #dddfdd;
  width: min(1380px, 100%);
  height: 0;
  margin: 0 auto;
}

@media (min-width: 1024px) {
}
</style>
