<script setup lang="ts">
import MusiCasa from '../components/MusiCasa.vue'
import SingingHands from '../components/SingingHands.vue'
import EnsembleScope from '../components/EnsembleScope.vue'
import NeuesZeug from '../components/NeuesZeug.vue'
import Vereinszeug from '../components/Vereinszeug.vue'
import {useRouter} from 'vue-router'
import {ref} from 'vue'

const router = useRouter()
const showControls = ref(true) // arrows + dots state
const items = [
  {name: 'Vereinszeug', component: Vereinszeug},
  {name: 'MusiCasa', component: MusiCasa},
  {name: 'SingingHands', component: SingingHands},
  {name: 'EnsembleScope', component: EnsembleScope},
  {name: 'NeuesZeug', component: NeuesZeug}
]

const currentIndex = ref(0) // default to the first item

function openItem(itemName: string) {
  currentIndex.value = items.findIndex(i => i.name === itemName)
  showControls.value = false // hide arrows + dots
  router.push(`/zeugundquer/${itemName}`)
}


</script>

<template>
  <div class="carousel">
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
    <router-view/>
  </div>
</template>
