<script setup lang="ts">
import MusiCasa from '../components/MusiCasa.vue'
import SingingHands from '../components/SingingHands.vue'
import EnsembleScope from '../components/EnsembleScope.vue'
import NeuesZeug from '../components/NeuesZeug.vue'
import Vereinszeug from '../components/Vereinszeug.vue'
import CloseIcon from "@/components/icons/CloseIcon.vue"
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'

const router = useRouter()
const route = useRoute()
const showControls = ref(true)
const showCloseIcon = ref(false)
const currentIndex = ref(0)
const activeComponent = ref<null | any>(null)

const items = [
  { name: 'Vereinszeug', component: Vereinszeug },
  { name: 'MusiCasa', component: MusiCasa },
  { name: 'SingingHands', component: SingingHands },
  { name: 'EnsembleScope', component: EnsembleScope },
  { name: 'NeuesZeug', component: NeuesZeug }
]

function openItem(itemName: string) {
  const index = items.findIndex(i => i.name === itemName)
  if (index !== -1) {
    currentIndex.value = index
    activeComponent.value = items[index].component
    showControls.value = false
    showCloseIcon.value = true
    router.push(`/zeugundquer/${itemName}`)
  }
}

function handleClose() {
  showControls.value = true
  showCloseIcon.value = false
  router.push('/zeugundquer')
}

// **Watch route to auto-open child if user navigates manually**
watch(
    () => route.fullPath,
    (path) => {
      const parts = path.split('/')
      const childName = parts[2] // '/zeugundquer/<child>'
      if (childName) {
        openItem(childName)
      } else {
        showCloseIcon.value = false
        showControls.value = true
      }
    },
    { immediate: true } // run on page load
)


</script>

<template>
  <div class="page-wrapper">
    <!-- Carousel -->
    <div class="carousel-container" :class="{ 'shifted': showCloseIcon }">
      <UCarousel
          v-slot="{ item }"
          :loop="showControls"
          :dots="showControls"
          :arrows="showControls"
          :swipe="showControls ? { vertical: false } : false"
          :items="showControls ? items : [items[currentIndex]]"
          :ui="{
            wrapper: 'w-screen h-screen relative overflow-hidden',
            container: 'flex w-screen h-screen',
            controls: 'absolute top-1/2 inset-x-30 flex justify-center gap-2 z-20',
            dots: 'absolute top-60 inset-x-0 flex justify-center gap-2 z-20',
            item: 'w-screen h-screen flex-shrink-0 m-0 p-0 cursor-pointer',
            dot: 'w-3 h-3 rounded-full bg-white/50 hover:bg-white transition',
            dotActive: 'bg-white'
          }"
      >
        <div @click="openItem(item.name)">
          <component :is="item.component" class="w-full h-screen"/>
        </div>
      </UCarousel>
    </div>

    <!-- Close button -->
    <CloseIcon v-if="showCloseIcon" @close="handleClose"/>

    <!-- Router view content -->
    <div class="router-container">
      <router-view v-slot="{ Component }">
        <transition name="slide-up" mode="out-in">
          <component v-if="showCloseIcon" :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
/* Carousel moves up when item is opened */
.carousel-container {
  position: relative;
  transition: transform 0.4s ease;
  transform: translateY(0);
  z-index: 10; /* stays above router view */
}

.carousel-container.shifted {
  transform: translateY(-200px);
}

/* Router view reveals itself underneath carousel */
.router-container {
  margin-top: -200px; /* pulls content up into revealed space */
  position: relative;
  z-index: 5; /* underneath carousel */
}

/* Slide-up transition for router view */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(100px);
  opacity: 0;
}

.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
