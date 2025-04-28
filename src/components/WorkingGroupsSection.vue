<script setup lang="ts">
import { computed, ref, onMounted, useTemplateRef, watchEffect } from 'vue'
import { getMembers } from '@/api/fake'
import { usePhotoLayout } from '@/hooks/usePhotoLayout'

import IconArrowLeft from './icons/IconArrowLeft.vue'
import IconArrowLeftDisabled from './icons/IconArrowLeftDisabled.vue'
import IconArrowRight from './icons/IconArrowRight.vue'
import IconArrowRightDisabled from './icons/IconArrowRightDisabled.vue'
import MemberItem from './MemberItem.vue'

const members = ref(getMembers())
const start_idx = ref(0)
// const photosRef = useTemplateRef(null);
// const { span } = usePhotoLayout(photosRef, 234, 66);
const span = ref(4)
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
    <div class="parent">
      <h2>Working Groups</h2>

      <div class="nav">
        <span v-if="leftEnd" class="left">
          <IconArrowLeftDisabled class="svg" />
        </span>
        <span v-else class="left">
          <IconArrowLeft class="svg" @click="toLeft" />
        </span>

        <span v-if="rightEnd" class="right">
          <IconArrowRightDisabled class="svg" />
        </span>
        <span v-else class="right">
          <IconArrowRight class="svg" @click="toRight" />
        </span>
      </div>
    </div>

    <div class="grid" ref="photos">
      <MemberItem v-for="member in visibleMembers" :home-page="member.homePage" :key="member.id">
        <template #photo>
          <img :src="member.photo" class="cover" />
        </template>
        <template #name>{{ member.name }}</template>
        {{ member.intro }}
      </MemberItem>
    </div>
  </div>
</template>

<style scoped>
.parent {
  padding-top: 160px;
  padding-bottom: 80px;
}

h2 {
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  text-align: center;
}

.nav {
  position: relative;
  bottom: 16px;
  right: 98px;
  text-align: right;
}

.left {
  padding-right: 32px;
}

/* .svg {
    display: block;
     width: auto;
    height: auto;
} */

.grid {
  display: flex;
  padding-left: 100px;
  padding-right: 206px;
  /* grid-column-gap: 66px; */
  /* column-gap: 66px; */
  /* grid-template-columns: repeat(auto-fill, minmax(234px, 1fr)); */
  /* grid-template-rows: 1fr; */
  justify-content: space-between;
}

.grid {
  display: grid;
  padding-left: 100px;
  padding-right: 206px;
  grid-column-gap: 66px;
  column-gap: 66px;
  grid-template-columns: repeat(auto-fill, minmax(234px, 1fr));
  justify-content: space-between;

  /* 水平排列 */
  /* grid-auto-flow: column; */
  /* 超出容器宽度时滚动 */
  /* overflow-x: auto; */
}

@media (min-width: 1024px) {
}
</style>
