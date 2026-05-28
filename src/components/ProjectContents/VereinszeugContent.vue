<template>
  <ProjectContentBase
      :showSponsorships="true"
      class="bg-gradient-to-b from-[#F7B267] via-[#FFD89B] to-[#FFF8EC] min-h-screen"
  >
    <template #profile>
      <Profile
          title="zeug und quer e.V."
          foundingYear="2015"
          :projects="[
      {
        title: '6 dauerhafte Projekte, etliche einmalige Initiativen und Projekt-Starthilfen insbesondere in den Bereichen:',
        subitems: [
          'Kulturelle Bildung und Teilhabe',
          'Inklusion',
          'Musikvermittlung in postmigrantischen Communities'
        ]
      }
    ]"
          concertsPerYear="ca. 15–20 Konzerte pro Jahr"
          responsible="Vereinsvorstand: Katharina Schmauder, Samira Nowarra, Hansjörg Schmauder"

          containerBg="bg-gradient-to-br from-[#B8C8D6]/60 via-[#E9EEF3]/80 to-white shadow-md border border-[#3F6576]/30 rounded-2xl"
          headerTextColor="text-[#12243D]"
          titleTextColor="text-[#12243D]"
          badgeTitleBg="bg-[#F5E7B2]"
          badgeTitleText="text-[#162A4B]"
          badgeYearBg="bg-[#3F6576]"
          badgeYearText="text-white"
          boxBg="bg-white/85 backdrop-blur-sm shadow-md"
          sectionTitleColor="text-[#2C4D67]"
          textColor="text-[#1F1F1F]"
          subTextColor="text-[#3A3A3A]"
          concertsBoxBg="bg-[#F5E7B2]/70"
          concertsTextColor="text-[#162A4B]"
          responsibleBoxBg="bg-[#C4D1DF]/60"
          responsibleTextColor="text-[#162A4B]"
      />


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
import Aktuelles from "@/components/Aktuelles.vue";
import AktuellesContent from "@/components/ProjectContents/AktuellesContent.vue";


const images = [
  {id: 1, url: img1, alt: 'Image 1'},
  {id: 2, url: img2, alt: 'Image 2'},
  {id: 3, url: img3, alt: 'Image 3'},
  {id: 4, url: img4, alt: 'Image 4'},
]


const sponsors = [
  {id: 1, url: aventis, name: 'Sponsor 1', current: true},
  {id: 2, url: bundesregierung, name: 'Sponsor 2', current: false},
  {id: 3, url: bwKunst, name: 'Sponsor 3', current: true},
  {id: 4, url: bwSoziales, name: 'Sponsor 4', current: false},
]


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

