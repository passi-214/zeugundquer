<script setup lang="ts">
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Gallery from "@/components/placeholder/Gallery.vue";
import {useGallery} from "@/composables/useGallery";
import Profile from "@/components/placeholder/Profile.vue";
import {ref, computed} from 'vue';
import {ChevronRight} from 'lucide-vue-next'
import CollapsibleGallery from "@/components/placeholder/CollapsibleGallery.vue";
import Sponsors from "@/components/placeholder/Sponsors.vue";


// Low-res images
const lowResMusik = import.meta.glob('@/assets/images/musik_ohne_gockeln/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

// High-res images (optional)
const highResMusik = import.meta.glob('@/assets/images/musik_ohne_gockeln/high_quality/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

const galleryImages = useGallery(lowResMusik, highResMusik, 'Pi7compressed');

const chevronRotation = computed(() => (open.value ? 'rotate-180' : 'rotate-0'))
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>


<template>
  <!-- Apply subtle gradient to entire page -->
  <ProjectContentBase
      :showSponsorships="true"
      class="bg-gradient-to-b from-[#3B2A3D]/35 via-[#6B5F8C]/25 to-[#F7F3EF]/15 min-h-screen">

    <!-- Profile Section -->
    <template #profile>
      <Profile
          title="Musik ohne Gockeln"
          foundingYear="2024"
          :projects="[
            {
              title: '14 Musiker:innen',
              subitems: [
                'Vokal',
                'Barockinstrumente',
                'Rezitation',
              ]
            }
          ]"
          concertsPerYear="2 Konzerte im Jahr"
          responsible="Carola Bauer-Scheid, Katharina Skala"

          containerBg="bg-gradient-to-br from-[#D8D3DF]/60 via-[#8C9FB1]/20 to-[#3B2A3D]/60 rounded-2xl"
          headerTextColor="text-[#2A2E43]"
          titleTextColor="text-[#2A2E43]"
          badgeTitleBg="bg-[#D97A66]/60"
          badgeTitleText="text-gray-200"
          badgeYearBg="bg-[#3B2A3D]"
          badgeYearText="text-gray-200"
          boxBg="bg-[#E8E3EB]/90 backdrop-blur-sm"
          sectionTitleColor="text-[#3B2A3D]"
          textColor="text-[#1E1E1E]"
          subTextColor="text-[#3A3A3A]"
          concertsBoxBg="bg-[#D97A66]/60"
          concertsTextColor="text-gray-200"
          responsibleBoxBg="bg-[#E8CFA9]/60"
          responsibleTextColor="text-[#2A2E43]"
      />
      <div class="h-12 sm:h-12"></div>
    </template>

    <!-- Description Section -->
    <template #description>
      <section class="px-6 py-20 w-full">
        <div class="w-full max-w-4xl mx-auto space-y-8 text-left md:text-justify text-lg md:text-xl text-[#1E1E1E]">
          <p>
            Wir sind ein Instrumental- und Vokalensemble aus erfahrenen Musiker:innen und jungen Musikstudierenden,
            verbunden durch unser Unwohlsein über Machtstrukturen im Musikbetrieb und unser Bedürfnis, einengende Muster
            gemeinsam aufzuspüren und zu ver-lernen.
          </p>
          <p>
            Das “Gockeln” in unserem Namen steht für einen Führungsstil, bei dem Geltungsbedürfnis und Machtstreben im
            Vordergrund stehen und zu Angst und wechselseitiger Abhängigkeit führen. Wir schaffen stattdessen einen
            Spiel-Raum, in dem wir auf humorvolle und scheiterfreudige Weise danach suchen, wie Kreativität sich
            entfalten kann und wir über Unterschiede und Widerstände hinweg im Kontakt bleiben können - untereinander
            und mit unserem Publikum.
          </p>
          <p>
            In unserem ersten Konzertprogramm “Vom Thron auf die Spielwiese” kombinieren wir barocke Musik mit kurzen
            Texten und performativen Elementen. Im Zentrum steht die Auftragskomposition “weh - le coq est mort” von
            Agnes Dorwarth.
          </p>
        </div>
      </section>

      <!-- Gallery -->
      <CollapsibleGallery
          :images="galleryImages"
          bgColor="bg-[#3B2A3D]"
          hoverBgColor="bg-[#5E4B6B]"
          textColor="text-gray-200"
          pulseFrom="#3B2A3D"
          pulseTo="#4A3B57"
      />



    </template>

    <!-- Sponsorships Section -->
    <template #sponsorships>
      <section class="text-white py-12">
        <h2 class="text-2xl font-semibold text-center mb-8">Unsere Förderer</h2>
        <!--        <Sponsors :sponsors="sponsors"/>-->
      </section>
    </template>
  </ProjectContentBase>
</template>


<style scoped>
/* Background pulse animation */
</style>