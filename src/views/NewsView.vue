<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { getNewsById, getComponentByType, type INewsItem } from '@/api/news'
import dayjs from 'dayjs'

const route = useRoute()

const newsData = ref<INewsItem | null>(null)

watch(() => route.params.id, fetchNewsData, { immediate: true })

async function fetchNewsData(id: string | string[]) {
  const safeId = Array.isArray(id) ? id[0] : id
  if (!safeId) throw new Error('Invalid ID')
  const numberId = Number(safeId)
  newsData.value = await getNewsById(numberId)
}

function dateTransform(date?: string) {
  const originalDate = dayjs(date)
  return originalDate.format('YYYY.MM.DD')
}
</script>

<template>
  <!-- {{ $route.params.id }} -->
  <div class="title-area">
    <div class="crumbs">Home >> News</div>
    <div class="title">{{ newsData?.title }}</div>
    <div class="date">{{ dateTransform(newsData?.date) }}</div>
  </div>

  <div class="content-area">
    <template v-for="(block, idx) in newsData?.blocks" :key="idx">
      <component
        :is="getComponentByType(block.type)"
        v-bind="block.content"
        class="content-block"
      />
    </template>
  </div>
</template>

<style scoped>
/* 标题部分 */
.title-area {
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 60px;
  padding-right: 280px;
  background: linear-gradient(271.51deg, #fff8e8 0%, #ebebed 85.28%);
}

.title-area .crumbs {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 14px;
  /* line-height: 100%; */
  letter-spacing: 0px;
  color: #7f7f7f;
}

.title-area .title {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 36px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #000000;

  padding-top: 16px;
  padding-bottom: 18px;
}

.title-area .date {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 14px;
  /* line-height: 100%; */
  letter-spacing: 0px;
  color: #7f7f7f;
}

/* 内容部分 */
.content-area {
  padding-left: 60px;
  padding-right: 280px;

  padding-top: 60px;
  padding-bottom: 60px;
}

@media (min-width: 1024px) {
}
</style>
