// import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

// export function usePhotoLayout(containerRef, photoWidth, gap = 0) {
//   const photosPerRow = ref(0)

//   // 计算函数
//   const calculatePhotosPerRow = () => {
//     if (!containerRef.value) return 0

//     const containerWidth = containerRef.value.offsetWidth
//     return Math.floor((containerWidth + gap) / (photoWidth + gap))
//   }

//   // 创建 ResizeObserver
//   const observer = new ResizeObserver(() => {
//     photosPerRow.value = calculatePhotosPerRow()
//   })

//   // 生命周期
//   onMounted(() => {
//     if (containerRef.value) {
//       observer.observe(containerRef.value)
//       photosPerRow.value = calculatePhotosPerRow() // 初始计算
//     }
//   })

//   onUnmounted(() => {
//     observer.disconnect()
//   })

//   // 响应窗口变化（可选）
//   const windowWidth = ref(window.innerWidth)
//   window.addEventListener('resize', () => {
//     windowWidth.value = window.innerWidth
//   })

//   watchEffect(() => {
//     photosPerRow.value = calculatePhotosPerRow()
//   })

//   return { photosPerRow }
// }
