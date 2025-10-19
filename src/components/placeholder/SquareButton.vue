<template>
  <button
      @click="navigate"
      :class="[
      'bg-gray-300 text-gray-900 font-semibold flex items-center justify-center rounded-md transition-all',
      isActive ? activeClasses : inactiveClasses
    ]"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  label: string
  to: string
  isActive?: boolean
}>()

const router = useRouter()

const activeClasses =
    'w-[calc(100vw-4rem)] h-32 sm:h-40 md:h-44 lg:h-48 bg-gray-400 transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1.11)] text-3xl'
const inactiveClasses =
    'w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 hover:w-36 sm:hover:w-44 transition-all duration-300 ease-in-out text-xl'

function navigate() {
  // use router push for internal navigation
  router.push(props.to)
}
</script>
