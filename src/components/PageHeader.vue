<script setup lang="ts">
import IconUst from './icons/IconUst.vue'
import IconLogo from './icons/IconLogo.vue'
import IconMore from './icons/IconMore.vue'
</script>

<template>
  <header class="header">
    <div class="flex-item ust">
      <IconUst class="svg svg-ust" />
    </div>
    <div class="flex-item site">
      <div class="logo">
        <IconLogo class="svg svg-site" />
      </div>
      <div class="logo-name">
        Otto Poon Centre for
        <br />
        Climate Resilience and Sustainability
      </div>
    </div>
    <div class="flex-item more">
      <IconMore class="svg svg-more" />
    </div>
  </header>
</template>

<style scoped>
.header {
  padding-left: 4%;
  padding-top: 4%;
  padding-bottom: 2%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-item {
  /* 0：如果存在剩余空间，也不放大 */
  flex-grow: 0;
  /* 1：如果空间不足，该项目将缩小 */
  flex-shrink: 1;
  flex-basis: auto;
}

.svg {
  /* SVG元素是一个inline类型的标签,
     * 浏览器会为标签之间的换行和空格, 生成一个看不见的空文本节点,
     * 这个空的文本节点占据了位置, 增加了一个看不见的高度 */
  display: block;

  /* 让svg随着屏幕尺寸缩放 */
  width: 100%;
  height: auto;
}

.ust {
  padding-right: 5px;

  border-right: 1px solid #ffffff;
}

.site {
  margin-left: 6px;
  margin-right: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-name {
  padding-left: 4px;

  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  /* line-height: 100%; */
  letter-spacing: 0;
}

@media (min-width: 1024px) {
  .ust {
    padding-right: 20px;
  }

  .site {
    margin-left: 24px;
    margin-right: 16px;
  }

  .logo-name {
    padding-left: 16px;
  }
}
</style>
