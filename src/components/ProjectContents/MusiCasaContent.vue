<template>
  <ProjectContentBase :showSponsorships="true">
    <template #profile>
      <Profile :data="musiCasaData"/>
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
import { onMounted, onUnmounted, ref} from "vue"; // ✅ added nextTick import
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import MusiCasaProjectCard from "@/components/placeholder/MusiCasaProjectCard.vue";
import Profile from "@/components/placeholder/Profile.vue";
import musiCasaData from "@/assets/data/musi_casa/musicasa_steckbrief.json";
import musiCasaContent from "@/assets/data/musi_casa/musi_casa_content.json";
import musiCasaProjectsData from "@/assets/data/musi_casa/musicasa_projects.json"


const activeCard = ref(null);
const descriptionRef = ref(null);
const pastProjectsHeader = ref(null);
const BASE_URL = import.meta.env.BASE_URL
// Fetch JSON data

const musiCasaProjects = ref([]);
 musiCasaProjects.value = musiCasaProjectsData;


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

const sponsors = musiCasaContent.sponsor

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

