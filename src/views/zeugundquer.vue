<script setup lang="ts">
import MusiCasa from '../components/MusiCasa.vue'
import SingingHands from '../components/SingingHands.vue'
import EnsembleScope from '../components/EnsembleScope.vue'
import NeuesZeug from '../components/NeuesZeug.vue'
import Vereinszeug from '../components/Vereinszeug.vue'

const items = [Vereinszeug, MusiCasa, SingingHands, EnsembleScope, NeuesZeug]
</script>

<template>
  <div class="carousel">

  <UCarousel
      v-slot="{ item }"
      loop
      dots
      arrows
      :swipe="{ vertical: false }"
      :items="items"
      :ui="{
  wrapper: 'w-screen h-screen relative overflow-hidden',
  container: 'flex w-screen h-screen',
  controls: 'absolute top-1/2 inset-x-30 flex justify-center gap-2 z-20',
  dots: 'absolute top-60 inset-x-0 flex justify-center gap-2 z-20',
  item: 'w-screen h-screen flex-shrink-0 m-0 p-0',
  dot: 'w-3 h-3 rounded-full bg-white/50 hover:bg-white transition',
  dotActive: 'bg-white'
}"


  >
    <component :is="item" class="w-full h-screen"/>
  </UCarousel>
  </div>
</template>

<style scoped>
.carousel {
  background-color: coral;
}
</style>
