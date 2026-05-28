<template>
  <button
      @click="navigate"
      :class="[ 'font-semibold flex items-center justify-center rounded-md transition-all relative', isActive ? activeClasses : inactiveClasses ]"
      :style="{
        backgroundColor: bgColor,
        color: textColor
      }"
  >
    <!-- Label stays centered naturally -->
    <span>{{ label }}</span>

    <!-- Highly visible, interactive SVG close/collapse indicator -->
    <span
        v-if="showCloseIcon"
        class="absolute right-6 sm:right-10 md:right-12 lg:right-16 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group select-none cursor-pointer"
    >
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      stroke="currentColor"
      class="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-90"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
  </svg>
</span>
  </button>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'

const props = defineProps<{
  label: string
  to: string
  isActive?: boolean
  showCloseIcon?: boolean // <-- Added optional prop for the indicator
  bgColor?: string
  textColor?: string
}>()

const router = useRouter()

const {
  bgColor = '#A34865',
  textColor = '#FAE308'
} = props

const activeClasses =
    'w-[calc(100vw-4rem)] h-32 sm:h-40 md:h-44 lg:h-48 bg-gray-400 transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1.11)] text-3xl'

const inactiveClasses =
    'w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 hover:w-36 sm:hover:w-44 transition-all duration-300 ease-in-out text-xl'

function navigate() {
  router.push(props.to)
}
</script>