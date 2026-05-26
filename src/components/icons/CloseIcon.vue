<script setup lang="ts">
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])

const router = useRouter()

function handleClose() {
  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // Navigate back
  router.push('/zeugundquer/')
  // Let parent know
  emit('close')
}
</script>

<template>
  <button
      @click="handleClose"
      class="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center shadow-lg hover:bg-black/80 transition md:w-18 md:h-18 md:bg-black md:text-lg"
  >
    ✕
  </button>
</template>
