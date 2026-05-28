<script setup lang="ts">
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const router = useRouter()

function handleClose() {
  // 1. Prüfen, ob ein Custom Event von einer aktiven Galerie abgefangen wird
  const galleryEvent = new CustomEvent('global-close-click', { cancelable: true })
  window.dispatchEvent(galleryEvent)

  // 2. Wenn das Event von der Galerie via .preventDefault() gestoppt wurde, brechen wir hier ab
  if (galleryEvent.defaultPrevented) {
    return
  }

  // 3. Normales Verhalten (Fallback wenn kein Galerie-Vollbild aktiv ist)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  router.push('/zeugundquer/')
  emit('close')
}
</script>

<template>
  <button
      id="global-close-btn"
      @click="handleClose"
      class="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center shadow-lg hover:bg-black/80 transition md:w-18 md:h-18 md:bg-black md:text-lg group"
  >
    <span class="close-icon-content transition-transform group-hover:scale-110 select-none">
      ✕
    </span>
  </button>
</template>