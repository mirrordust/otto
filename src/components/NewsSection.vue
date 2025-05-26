<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { getNews } from '@/api/news'
import dayjs from 'dayjs'

let timer: number = -1
const newsList = ref(getNews())
const numPerPage = ref(4)
const startIdx = ref(0)

const displayNewsList = computed(() => {
  return newsList.value.slice(startIdx.value, startIdx.value + numPerPage.value)
})
const totalPages = computed(() => {
  return Math.ceil(newsList.value.length / numPerPage.value)
})
const currentPage = computed(() => {
  return Math.floor(startIdx.value / numPerPage.value) + 1
})
function gotoPage(n: number) {
  clearInterval(timer)

  startIdx.value = (n - 1) * numPerPage.value

  startTimer()
}
function gotoNextPage() {
  let nextPage = currentPage.value + 1
  if (nextPage > totalPages.value) {
    nextPage = 1
  }
  gotoPage(nextPage)
}

function dateTransform(date: string) {
  const originalDate = dayjs(date)
  return originalDate.format('MMM DD, YYYY')
}

const startTimer = () => {
  timer = setInterval(() => {
    gotoNextPage()
  }, 20000) // 20秒切换一次
}
onMounted(startTimer)
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="content-container">
    <h3>News&Events</h3>

    <!-- events -->
    <div class="grid">
      <div class="desc">
        <div class="desc-content">
          <div class="date">23rd April 2025</div>
          <div class="title">
            The 1st Otto Poon CCRS Initial Interdisciplinary Engagement Meeting
          </div>
        </div>
      </div>

      <div class="image">
        <img src="/images/news/first_meeting.jpg" class="cover" />
      </div>
    </div>

    <!-- links-news -->
    <div class="links-news-container">
      <a
        class="link-news"
        v-for="linkNews in displayNewsList"
        :key="linkNews.id"
        :href="linkNews.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="date">{{ dateTransform(linkNews.date) }}</div>
        <div class="title">{{ linkNews.title }}</div>
      </a>

      <div class="links-news-nav">
        <div
          v-for="n in totalPages"
          :key="n"
          class="circle"
          :class="{ selected: currentPage == n }"
          @click="gotoPage(n)"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  padding-bottom: 80px;
}

h3 {
  font-family: 'Noto Sans';
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4e07d8;

  padding-top: 80px;
  padding-left: 100px;
}

/* ----------------------------------- */
/* ----------  events  ----------- */
/* ----------------------------------- */

.grid {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  padding-bottom: 150px;
}

.date {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #7f7f7f;

  padding-top: 7px;
  padding-bottom: 16px;
}

.title {
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;

  padding-bottom: 13px;
}

.desc {
  display: flex;
  align-items: center;
  align-self: start;
  justify-self: start;
}

.desc-content {
  position: relative;
  padding-left: 24px;
}

.desc-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 8px;
  background: #4e07d8;
  border-radius: 4px;
  /* z-index: -1; */
}

.image {
  width: min(680px, 100%);
  border-radius: 16px;
  overflow: hidden;
}

.cover {
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
  overflow: hidden;
}

/* ----------------------------------- */
/* ----------  links-news  ----------- */
/* ----------------------------------- */
.links-news-container {
  padding-left: calc(100px + 32px);
  padding-right: 100px;
}

.link-news {
  display: block;
  text-decoration: none;
  padding: 32px 0;

  border-bottom: 2px dashed #dddfdd;
}

.link-news:first-child {
  border-top: 2px dashed #dddfdd;
}

.link-news .date {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  /* line-height: 100%; */
  letter-spacing: 0%;
  color: #7f7f7f;
}

.link-news .title {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;

  padding-top: 16px;
}

.link-news .title {
  width: 80%;
  /* 强制文本不换行 */
  white-space: nowrap;
  /* 隐藏溢出内容 */
  overflow: hidden;
  /* 显示省略号 */
  text-overflow: ellipsis;
  /* 非块级元素需要添加(如span标签) */
  display: block;
}

.links-news-nav {
  width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  padding-top: 24px;
}

.circle {
  width: 12px;
  height: 12px;
  background-color: #dddfdd;
  border-radius: 50%;
}

.circle.selected {
  background-color: #4e07d8;
}

.circle:hover {
  transform: scale(1.5);
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    justify-items: center;
    align-items: center;
  }
}
</style>
