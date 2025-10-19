<template>
  <ProjectContentBase>
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
      <!-- Static intro section -->
      <h2 class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10">Über das Projekt</h2>
      <p class="text-xl font-bold mb-4 px-4 sm:px-10 pb-6 sm:pb-10">
        Durch gemeinsames Musizieren Begegnungen über sprachliche Grenzen hinaus zu ermöglichen – mit diesem Ansatz
        richtet sich MusiCasa hauptsächlich an Kinder und Jugendliche mit unterschiedlichen kulturellen Hintergründen,
        nicht nur, aber vor allem mit Flucht- und Migrationshintergrund.
        <br><br>
        Das Erfinden, Experimentieren und Spielen von Musik, aber vor allem auch die Begegnung und der Austausch
        zwischen Kindern und jungen Menschen aus verschiedenen Herkunftsländern sind zentrale Aspekte von MusiCasa.
      </p>

      <!-- Section title -->
      <h2
          ref="pastProjectsHeader"
          class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10"
      >
        Vergangene Projekte
      </h2>


      <!-- Project Cards Section -->
      <div
          ref="descriptionRef"
          class="flex flex-col items-center gap-20 px-4 md:px-6 lg:px-8 w-full"
      >
        <MusiCasaProjectCard
            v-for="(entry, index) in musiCasaProjects"
            :key="index"
            :entry="entry"
            :isActive="activeCard === entry"
            :titleAlign="getTitleAlignment(index)"
            @click="handleCardClick(entry)"
            v-show="!activeCard || activeCard === entry"
        />
      </div>
    </template>

    <template #sponsorships>
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue"; // ✅ added nextTick import
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import MusiCasaProjectCard from "@/components/placeholder/MusiCasaProjectCard.vue";

const musiCasaProjects = ref([]);
const activeCard = ref(null);
const descriptionRef = ref(null);
const pastProjectsHeader = ref(null);

// Fetch JSON data
onMounted(async () => {
  const res = await fetch("/data/musicasa_projects.json");
  const json = await res.json();
  musiCasaProjects.value = json;
});

const handleCardClick = async (entry) => {
  activeCard.value = entry;

  // Wait for DOM update before scrolling
  await nextTick();

  if (pastProjectsHeader.value) {
    const headerOffset = pastProjectsHeader.value.getBoundingClientRect().top + window.scrollY - 80; // adjust offset if needed
    window.scrollTo({
      top: headerOffset,
      behavior: "smooth",
    });
  }
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
  { id: 1, url: "@assets/images/sponsor/aventis_foundation.avif", name: "Sponsor 1", current: true },
  { id: 2, url: "@assets/images/sponsor/bundesregierung.avif", name: "Sponsor 2", current: false },
  { id: 3, url: "@assets/images/sponsor/bw_kunst.avif", name: "Sponsor 3", current: true },
  { id: 5, url: "@assets/images/sponsor/deutsche_orchester_stiftung.avif", name: "Sponsor 3", current: true },
  { id: 4, url: "@assets/images/sponsor/bw_soziales.avif", name: "Sponsor 4", current: false },
];

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
</script>

