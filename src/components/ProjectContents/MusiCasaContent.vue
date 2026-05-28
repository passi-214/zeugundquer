<template>
  <ProjectContentBase :showSponsorships="true">
    <template #profile>
      <Profile
          title="MusiCasa"
          foundingYear="2024"
          :projects="[
          { title: '14 Musiker:innen',
            subitems: [
              'Vokal',
              'Barockinstrumente',
              'Rezitation'
            ]
          }
        ]"
          concertsPerYear="2 Konzerte pro Jahr"
          responsible="Carola Bauer-Scheid, Katharina Skala"

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
      <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <h2 class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10">Über MusiCasa</h2>
          <p class="text-xl font-bold mb-4 px-4 sm:px-10">
            Durch gemeinsames Musizieren Begegnungen über sprachliche Grenzen hinaus zu ermöglichen – mit diesem Ansatz
            richtet sich MusiCasa hauptsächlich an Kinder und Jugendliche mit unterschiedlichen kulturellen
            Hintergründen,
            nicht nur, aber vor allem mit Flucht- und Migrationshintergrund.
            <br><br>
            Das Erfinden, Experimentieren und Spielen von Musik, aber vor allem auch die Begegnung und der Austausch
            zwischen Kindern und jungen Menschen aus verschiedenen Herkunftsländern sind zentrale Aspekte von MusiCasa.
          </p>
        </div>
      </section>

      <section class="flex flex-col items-center px-6 py-2 text-gray-800 leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-center text-lg md:text-xl">
          <h2
              ref="pastProjectsHeader"
              class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-12 pb-10 text-center"
          >
            Vergangene Projekte
          </h2>
        </div>
      </section>

      <div class="w-full flex justify-center">
        <TransitionGroup
            tag="div"
            name="project-grid"
            ref="descriptionRef"
            class="rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 px-4 md:px-6 lg:px-8 w-full max-w-6xl justify-items-center justify-center pb-20"
        >
          <MusiCasaProjectCard
              v-for="(entry, index) in musiCasaProjects"
              :key="entry.title || index"
              :entry="entry"
              :isActive="activeCard === entry"
              :anyActive="!!activeCard"
              :titleAlign="getTitleAlignment(index)"
              @click="handleCardClick(entry)"
              @close="activeCard = null"
          />
        </TransitionGroup>
      </div>
    </template>

    <template #sponsorships>
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>

<script setup>
import {nextTick, onMounted, onUnmounted, ref} from "vue"; // ✅ added nextTick import
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import MusiCasaProjectCard from "@/components/placeholder/MusiCasaProjectCard.vue";
import aventis from "@/assets/images/sponsor/aventis_foundation.avif";
import bundesregierung from "@/assets/images/sponsor/bundesregierung.avif";
import bwKunst from "@/assets/images/sponsor/bw_kunst.avif";
import bwSoziales from "@/assets/images/sponsor/bw_soziales.avif";
import Profile from "@/components/placeholder/Profile.vue";


const musiCasaProjects = ref([]);
const activeCard = ref(null);
const descriptionRef = ref(null);
const pastProjectsHeader = ref(null);
const BASE_URL = import.meta.env.BASE_URL
// Fetch JSON data
onMounted(async () => {
  try {
    const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_MUSI_CASA_PROJECTS;
    const res = await fetch(cloudinaryUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    musiCasaProjects.value = await res.json();
  } catch (err) {
    console.error('Failed to fetch Musi Casa data:', err);
  }
});

const handleCardClick = async (entry) => {
  // Wenn die Karte bereits aktiv ist, nichts tun (verhindert erneuten Autoscroll)
  if (activeCard.value === entry) return;
  activeCard.value = entry;
};

// Collapse expanded card when clicking outside
const handleClickOutside = (event) => {
  const path = event.composedPath();
  if (descriptionRef.value && !path.includes(descriptionRef.value)) {
    activeCard.value = null;
  }
};

function getTitleAlignment(index) {
  const patterns = ["left", "right", "center"];
  return patterns[index % patterns.length];
}

const sponsors = [
  {id: 1, url: aventis, name: 'Sponsor 1', current: true},
  {id: 2, url: bundesregierung, name: 'Sponsor 2', current: false},
  {id: 3, url: bwKunst, name: 'Sponsor 3', current: true},
  {id: 4, url: bwSoziales, name: 'Sponsor 4', current: false},
]

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

