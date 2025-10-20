<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import Gallery from '@/components/placeholder/Gallery.vue'

interface ImageItem {
  src: string
  highResSrc?: string
  alt?: string
}

const props = defineProps<{
  images: ImageItem[]
}>();

const open = ref(false)
</script>

<template>
  <UCollapsible v-model:open="open" class="w-full p-5">
    <!-- Collapsible trigger -->
    <div
        class="flex h-30 items-center justify-center cursor-pointer select-none py-6 px-8 rounded-lg shadow transition-all"
        :class="[
        'hover:shadow-lg hover:bg-amber-100',
        open ? 'bg-amber-50' : 'bg-pulse-amber'
      ]"
    >
      <ChevronRight
          class="text-amber-700 transition-transform duration-300 mr-4"
          :class="{'rotate-90': open}"
          size="32"
      />
      <h2 class="text-4xl font-semibold text-amber-700 text-center">Gallerie</h2>
    </div>

    <!-- Collapsible content -->
    <transition name="collapsible" appear>
      <div v-show="open" class="w-full px-4 sm:px-12 md:px-24 lg:px-48 pt-10 overflow-hidden">
        <Gallery :images="images" :currentImage="null"/>
      </div>
    </transition>
  </UCollapsible>
</template>

<style scoped>
/* Background pulse animation */
@keyframes bgPulse {
  0%, 100% { background-color: #fef3c7; } /* amber-50 */
  50% { background-color: #fde68a; }       /* amber-200, bright */
}
.bg-pulse-amber {
  animation: bgPulse 3s infinite ease-in-out;
}

/* Smooth collapse transition */
.collapsible-enter-from,
.collapsible-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.collapsible-enter-to,
.collapsible-leave-from {
  max-height: 2000px; /* large enough to fit content */
  opacity: 1;
  padding-top: 2.5rem; /* matches pt-10 */
  padding-bottom: 2.5rem;
}

.collapsible-enter-active,
.collapsible-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
