<script setup lang="ts">
import { computed, ref } from 'vue'
import { getMembers } from '@/api/data'
// import { usePhotoLayout } from '@/hooks/usePhotoLayout'

import IconArrowLeft from './icons/IconArrowLeft.vue'
import IconArrowLeftDisabled from './icons/IconArrowLeftDisabled.vue'
import IconArrowRight from './icons/IconArrowRight.vue'
import IconArrowRightDisabled from './icons/IconArrowRightDisabled.vue'
import MemberItem from './MemberItem.vue'

const members = ref(getMembers())
const start_idx = ref(0)
// const photosRef = useTemplateRef(null);
// const { span } = usePhotoLayout(photosRef, 234, 66);
const span = ref(10)
const visibleMembers = computed(() => {
  return members.value.slice(start_idx.value, start_idx.value + span.value)
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
  }
}

function toRight() {
  if (start_idx.value + span.value < members.value.length) {
    start_idx.value += span.value
  }
}

// watchEffect(() => {
//     console.log(start_idx.value);
//     console.log(span.value);
//     console.log(leftEnd.value);
//     console.log(rightEnd.value);
// });
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

    <div class="grid" ref="photos">
      <TransitionGroup name="list">
        <MemberItem
          v-for="member in visibleMembers"
          :key="member.id"
          :photo="member.photo"
          :name="member.name"
          :intro="member.intro"
          :home-page="member.homePage"
        />
      </TransitionGroup>
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

.grid {
  display: grid;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  padding-bottom: 116px;

  grid-column-gap: 20px;
  column-gap: 20px;
  grid-row-gap: 20px;
  row-gap: 20px;

  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  grid-auto-rows: minmax(320px, auto);
  /* justify-content: space-between; */

  /* 水平排列 */
  /* grid-auto-flow: column; */
  /* 超出容器宽度时滚动 */
  /* overflow-x: auto; */
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
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
}

@media (min-width: 1024px) {
}
</style>
