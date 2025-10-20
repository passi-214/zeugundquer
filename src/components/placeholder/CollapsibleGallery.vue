<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import Gallery from '@/components/placeholder/Gallery.vue'

interface ImageItem {
  src: string
  highResSrc?: string
  alt?: string
}

const props = defineProps<{
  images: ImageItem[]
  bgColor?: string           // default background
  hoverBgColor?: string      // hover background
  textColor?: string         // title text
  pulseFrom?: string         // pulse start color
  pulseTo?: string           // pulse end color
}>();

const open = ref(false)

const containerClasses = computed(() => [
  'flex h-30 items-center justify-center cursor-pointer select-none py-6 px-8 rounded-lg shadow transition-all',
  !open.value ? 'bg-pulse-custom' : '',  // only pulse when collapsed
  open.value ? props.hoverBgColor ?? '' : props.bgColor ?? ''
])



const titleClasses = computed(() => [
  'text-4xl font-semibold text-center transition-colors',
  props.textColor ?? 'text-amber-700'
])
</script>

<template>
  <UCollapsible v-model:open="open" class="w-full p-5">
    <div :class="containerClasses"
         :style="{
       '--pulse-from': props.pulseFrom ?? '#3B2A3D',
       '--pulse-to': props.pulseTo ?? '#8C9FB1'
     }">
      <ChevronRight
          class="transition-transform duration-300 mr-4"
          :class="{'rotate-90': open, [props.textColor ?? 'text-amber-700']: true}"
          size="32"
      />
      <h2 :class="titleClasses">Gallerie</h2>
    </div>

    <transition name="collapsible" appear>
      <div v-show="open" class="w-full px-4 sm:px-12 md:px-24 lg:px-48 pt-10 overflow-hidden">
        <Gallery :images="images" :currentImage="null"/>
      </div>
    </transition>
  </UCollapsible>
</template>

<style scoped>
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
  max-height: 2000px;
  opacity: 1;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.collapsible-enter-active,
.collapsible-leave-active {
  transition: all 0.5s ease-in-out;
}

/* Pulsating background with custom colors */
@keyframes bgPulseCustom {
  0%, 100% { background-color: var(--pulse-from, #3B2A3D); }
  50% { background-color: var(--pulse-to, #8C9FB1); }
}
.bg-pulse-custom {
  animation: bgPulseCustom 4s infinite ease-in-out;
}

</style>
