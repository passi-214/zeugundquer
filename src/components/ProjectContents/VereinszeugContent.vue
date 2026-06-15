<template>
  <ProjectContentBase
      :showSponsorships="true"
      class="bg-gradient-to-b from-[#F7B267] via-[#FFD89B] to-[#FFF8EC] min-h-screen"
  >
    <template #profile>
      <Profile :data="zeugUndQuerData" />
      <div class="h-12 sm:h-12"></div>
    </template>

    <template #description>
      <section class=" rounded-2xl mx-4 sm:mx-10 my-8 p-6">
        <h2 class="text-3xl font-bold mb-4 text-[#162A4B] pb-8">Was sind wir?</h2>
        <div class="-mx-10 mt-6 pb-10">
          <ContentCarousel :images="images" :config="myConfig"/>
        </div>
      </section>


      <section class="flex flex-col items-center px-6 pb-12 text-gray-800 leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <h2 class="text-3xl font-bold mb-4 text-[#162A4B]">Wer sind wir?</h2>
          <p class="text-xl font-medium mb-4 text-[#333333] leading-relaxed pt-6">
            zeug und quer e. V. hat sich im April 2015 gegründet und besteht derzeit aus ca. 35 Mitgliedern
            (großteils Studierende der Musikhochschule Freiburg). Der Kulturverein möchte Verbindungen schaffen,
            insbesondere interdisziplinärer, interkultureller und generationenübergreifender Art.
            Genauso sollen laut Satzung zwischen Kunst und ihrer Vermittlung, Tradition und Gegenwart, Anspruch
            und Vergnügen, dem Profi- und Laienmusikbetrieb Brücken geschlagen werden.
          </p>
        </div>
      </section>
      <section class="pt-20">
        <AktuellesContent></AktuellesContent>
      </section>
    </template>

    <template #sponsorships>
      <section class="text-white py-12">
        <Sponsors :sponsors="sponsors"/>
      </section>
    </template>
  </ProjectContentBase>
</template>


<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from 'vue';
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Profile from "@/components/placeholder/Profile.vue";
import ContentCarousel from "@/components/placeholder/ImageContentCarousel.vue";
import Sponsors from "@/components/placeholder/Sponsors.vue";
import aventis from '@/assets/images/sponsor/aventis_foundation.avif'
import bundesregierung from '@/assets/images/sponsor/bundesregierung.avif'
import bwKunst from '@/assets/images/sponsor/bw_kunst.avif'
import bwSoziales from '@/assets/images/sponsor/bw_soziales.avif'
import img1 from '@/assets/images/vereinszeug/vereinszeug1.png'
import img2 from '@/assets/images/vereinszeug/vereinszeug2.png'
import img3 from '@/assets/images/vereinszeug/vereinszeug3.png'
import img4 from '@/assets/images/vereinszeug/vereinszeug4.png'
import AktuellesContent from "@/components/ProjectContents/AktuellesContent.vue";
import zeugUndQuerData from '@/assets/data/vereinszeug/zeugundquer_steckbrief.json';
import zeugUndQuerContent from '@/assets/data/vereinszeug/zeug_und_quer_content.json';


const images = [
  {id: 1, url: img1, alt: 'Image 1'},
  {id: 2, url: img2, alt: 'Image 2'},
  {id: 3, url: img3, alt: 'Image 3'},
  {id: 4, url: img4, alt: 'Image 4'},
]


const sponsors = zeugUndQuerContent.sponsor


// Reactive width
const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

// Compute carousel config based on screen size
const myConfig = computed(() => {
  if (windowWidth.value < 640) { // mobile
    return {
      itemsToShow: 1.2,
      wrapAround: true,
      showNavigation: false,
    }
  } else if (windowWidth.value < 1200) { // tablet
    return {
      itemsToShow: 1.3,
      wrapAround: true,
      showNavigation: true,
    }
  } else if (windowWidth.value < 1500) { // desktop
    return {
      itemsToShow: 1.4,
      wrapAround: true,
      showNavigation: true,
    }
  } else {
    return {
      itemsToShow: 1.5,
      wrapAround: true,
      showNavigation: true,
    }
  }
})


</script>

