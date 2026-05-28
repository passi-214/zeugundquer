<script setup lang="ts">
import MusiCasa from '../components/MusiCasa.vue'
import SingingHands from '../components/SingingHands.vue'
import EnsembleScope from '../components/EnsembleScope.vue'
import NeuesZeug from '../components/NeuesZeug.vue'
import Vereinszeug from '../components/Vereinszeug.vue'
import CloseIcon from "@/components/icons/CloseIcon.vue"
import {useRouter, useRoute} from 'vue-router'
import {ref, onMounted, watch, nextTick} from 'vue'
import Aktuelles from "@/components/Aktuelles.vue";
import OrchesterConAnima from "@/components/OrchesterConAnima.vue";
import SchallUndRauch from "@/components/SchallUndRauch.vue";
import MusikOhneGockeln from "@/components/MusikOhneGockeln.vue";

const router = useRouter()
const route = useRoute()
const showControls = ref(true)
const showCloseIcon = ref(false)
const currentIndex = ref(0)
const activeComponent = ref<null | any>(null)
const currentOpenedItemName = ref<string | null>(null)

// Template Ref für das UCarousel
const carouselRef = ref<any>(null)

const items = [
  {name: 'vereinszeug', component: Vereinszeug},
  {name: 'musicasa', component: MusiCasa},
  {name: 'singendehaende', component: SingingHands},
  {name: 'ensemblescope', component: EnsembleScope},
  {name: 'neueszeug', component: NeuesZeug},
  {name: 'aktuelles', component: Aktuelles},
  {name: 'orchesterconanima', component: OrchesterConAnima},
  {name: 'schallundrauch', component: SchallUndRauch},
  {name: 'musikohnegockeln', component: MusikOhneGockeln}
]

function scrollToProfile() {
  nextTick(() => {
    setTimeout(() => {
      const element = document.getElementById('profile-section')
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'})
      }
    }, 10)
  })
}

function openItem(itemName: string) {
  const index = items.findIndex(i => i.name === itemName)
  if (index !== -1) {
    currentIndex.value = index
    activeComponent.value = items[index].component
    showControls.value = false
    showCloseIcon.value = true
    router.push(`/zeugundquer/${itemName}`)

    // Trigger the auto-scroll
    scrollToProfile()
  }
}

function handleClose() {
  // Wir steuern showControls und den Routenwechsel umgekehrt,
  // damit das Array aufgebaut wird, BEVOR die Route finallisiert wird
  showControls.value = true
  showCloseIcon.value = false

  // Wir speichern den Index in der Session (oder Variable), falls der Watcher ihn braucht
  sessionStorage.setItem('last_carousel_index', currentIndex.value.toString())

  router.push('/zeugundquer')
}

// **Watch route to auto-open child if user navigates manually**
watch(
    () => route.fullPath,
    async (path) => {
      if (path === '/zeugundquer/impressum') {
        showCloseIcon.value = false
        showControls.value = true
        return
      }

      const parts = path.split('/').filter(Boolean)
      const firstChild = parts[1]
      const isNested = parts.length > 2

      if (!isNested && firstChild && items.some(i => i.name === firstChild)) {
        if (currentOpenedItemName.value !== firstChild) {
          const index = items.findIndex(i => i.name === firstChild)
          if (index !== -1) currentIndex.value = index

          openItem(firstChild)
        }
      } else if (!isNested) {
        showCloseIcon.value = false
        showControls.value = true
        currentOpenedItemName.value = null // <-- Reset on back home navigation

        await nextTick();

        const savedIndexRaw = sessionStorage.getItem('last_carousel_index')
        if (savedIndexRaw !== null) {
          const targetIndex = parseInt(savedIndexRaw, 10)
          currentIndex.value = targetIndex

          carouselRef.value?.emblaApi?.scrollTo(targetIndex, true)
        }
      }
    },
    {immediate: true}
)
</script>

<template>
  <div class="page-wrapper">
    <!-- Carousel -->
    <div
        v-if="route.path !== '/zeugundquer/impressum'"
        class="carousel-container"
        :class="{ 'shifted': showCloseIcon }"
    >
      <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :loop="showControls"
          :dots="showControls"
          :arrows="showControls"
          :swipe="showControls ? { vertical: false } : false"
          :items="showControls ? items : [items[currentIndex]]"
          :ui="{
        wrapper: 'w-screen h-screen relative overflow-hidden',
        container: 'flex w-screen h-screen',
        controls: 'absolute top-1/2 inset-x-1 md:inset-x-30 lg:inset-x-40 flex justify-center gap-2 z-20',
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
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
/* Deine Styles bleiben exakt unverändert */
.carousel-container {
  position: relative;
  transition: transform 0.4s ease;
  transform: translateY(0);
  z-index: 10;
}

.carousel-container.shifted {
  transform: translateY(-200px);
}

@media (max-width: 768px) {
  .carousel-container.shifted {
    transform: translateY(-250px);
  }

  .router-container {
    margin-top: -300px;
  }
}

.router-container {
  margin-top: -200px;
  position: relative;
  z-index: 5;
}

@media (max-width: 768px) {
  .router-container {
    margin-top: -300px;
    position: relative;
    z-index: 5;
  }
}

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