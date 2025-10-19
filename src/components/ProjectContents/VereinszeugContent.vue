<template>
  <ProjectContentBase >
    <template #profile>
      <Profile
          title="zeug und quer e.V."
          foundingYear="2015"
          :projects="[
          { title: '6 dauerhafte Projekte, etliche einmalige Initiativen und Projekt-Starthilfen insbesondere in den Bereichen:',
            subitems: [
              'Kulturelle Bildung und Teilhabe',
              'Inklusion',
              'Musikvermittlung in postmigrantischen Communities'
            ]
          }
        ]"
          concertsPerYear="ca. 15-20 Konzerte pro Jahr"
          responsible="Vereinsvorstand: Katharina Schmauder, Samira Nowarra, Hansjörg Schmauder"

          containerBg="bg-gradient-to-br from-indigo-50 to-purple-50"
          headerTextColor="text-purple-700"
          titleTextColor="text-purple-900"
          badgeTitleBg="bg-purple-200"
          badgeTitleText="text-purple-900"
          badgeYearBg="bg-indigo-200"
          badgeYearText="text-indigo-900"
          boxBg="bg-white"
          sectionTitleColor="text-indigo-700"
          textColor="text-gray-800"
          subTextColor="text-gray-600"
          concertsBoxBg="bg-yellow-100"
          concertsTextColor="text-yellow-900"
          responsibleBoxBg="bg-green-100"
          responsibleTextColor="text-green-800"
      />
      <div class="h-12 sm:h-12"></div>

    </template>
    <template #description>
      <!-- Full-width carousel inside description -->
      <h2 class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10">Was sind wir?</h2>
      <div class="-mx-10 mt-6 pb-10">
        <ContentCarousel :images="images" :config="myConfig"/>
      </div>

      <h2 class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10">
        Wer sind wir?
      </h2>
      <p class="text-xl font-bold mb-4 px-4 sm:px-10 pb-6 sm:pb-10">
        zeug und quer e. V. hat sich im April 2015 gegründet und besteht derzeit aus ca. 35 Mitgliedern (großteils
        Studierende der Musikhochschule Freiburg). Der Kulturverein möchte Verbindungen schaffen, insbesondere
        interdisziplinärer, interkultureller und generationenübergreifender Art. Genauso sollen laut Satzung zwischen
        Kunst und ihrer Vermittlung, Tradition und Gegenwart, Anspruch und Vergnügen, dem Profi- und Laienmusikbetrieb
        Brücken geschlagen werden.
      </p>

    </template>

    <template #sponsorships>
      <Sponsors :sponsors="sponsors" />
    </template>
  </ProjectContentBase>
  <!--  <div class="mt-12">-->
  <!--    <ContentCarousel :images="images" :config="myConfig" />-->
  <!--  </div>-->
</template>


<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue';
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


const images = [
  { id: 1, url: img1, alt: 'Image 1' },
  { id: 2, url: img2, alt: 'Image 2' },
  { id: 3, url: img3, alt: 'Image 3' },
  { id: 4, url: img4, alt: 'Image 4' },
]


const sponsors = [
  { id: 1, url: aventis, name: 'Sponsor 1', current: true },
  { id: 2, url: bundesregierung, name: 'Sponsor 2', current: false },
  { id: 3, url: bwKunst, name: 'Sponsor 3', current: true },
  { id: 4, url: bwSoziales, name: 'Sponsor 4', current: false },
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

