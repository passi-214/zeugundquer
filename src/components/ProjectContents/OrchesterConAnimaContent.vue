<template>
  <ProjectContentBase>
    <template #profile>
      <Profile title="Orchester Con Anima" foundingYear="2018"
               :projects="[ { title: 'Sozialmusikprojekt / interkulturelles Orchester', subitems: [ '32 aktive Musizierende', '11 Herkunftsländern', ] } ]"
               concertsPerYear="2-5 Konzerte pro Jahr" responsible="Carola Christ"
               containerBg="bg-gradient-to-br from-indigo-50 to-purple-50" headerTextColor="text-purple-700"
               titleTextColor="text-purple-900" badgeTitleBg="bg-purple-200" badgeTitleText="text-purple-900"
               badgeYearBg="bg-indigo-200" badgeYearText="text-indigo-900" boxBg="bg-white"
               sectionTitleColor="text-indigo-700" textColor="text-gray-800" subTextColor="text-gray-600"
               concertsBoxBg="bg-yellow-100" concertsTextColor="text-yellow-900" responsibleBoxBg="bg-green-100"
               responsibleTextColor="text-green-800"/>
      <div class="h-12 sm:h-12"></div>
    </template>
    <template #description>
      <div class="p-5">
        <div
            class="button-panel grid gap-4 justify-center justify-items-center mb-4"
            style="grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr)); max-width: 40rem; margin-inline: auto;"
        >
          <SquareButton
              v-for="(btn, index) in buttons"
              :key="index"
              :label="btn.label"
              :to="btn.to"
              :isActive="clickedButton === btn.to"
              @click="handleClick(btn.to)"
              v-show="!clickedButton || clickedButton === btn.to"
          />
        </div>
        <router-view :key="$route.fullPath"/>
        <div class="w-full px-4 sm:px-12 md:px-24 lg:px-48 pt-10">
          <h2 class="text-4xl font-semibold text-amber-700 pt-8 pb-12 text-center">
            Gallerie
          </h2>
          <Gallery :images="galleryImages"  :currentImage="null"/>
        </div>

      </div>

    </template>


    <template #sponsorships>
      <ul class="list-disc pl-6">
        <li>Sponsor A</li>
        <li>Sponsor B</li>
      </ul>
    </template>
  </ProjectContentBase>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Profile from "@/components/placeholder/Profile.vue";
import SquareButton from "@/components/placeholder/SquareButton.vue";
import Gallery from "@/components/placeholder/Gallery.vue";
import {useGallery} from "@/composables/useGallery";

const buttons = [
  {label: "Aktuelles", to: "conAnimaAktuelles"},
  {label: "ConAnima", to: "conAnima"},
  {label: "Orchester", to: "conAnimaOrchester"},
  {label: "Team", to: "conAnimaTeam"},
  {label: "Mitspielen", to: "conAnimaMitspielen"},
  {label: "Unterstützen", to: "conAnimaSupport"}
]

const clickedButton = ref<string | null>(null)
const router = useRouter()  // <-- Add this

function handleClick(to: string) {
  if (clickedButton.value === to) {
    // Reset clicked button
    clickedButton.value = null
    // Navigate to parent route explicitly
    router.replace({path: '/zeugundquer/OrchesterConAnima'})
  } else {
    clickedButton.value = to
    router.push({name: to})
  }
}


// Low-res images
const lowResMusik = import.meta.glob('@/assets/images/orchester_con_anima/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});


const galleryImages = useGallery(lowResMusik);

</script>

<style scoped> @media (min-width: 800px) {
  .button-panel {
    max-width: 60rem; /* allow more space for 3 buttons */
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 4rem; /* bigger spacing on desktop */
  }
} </style>