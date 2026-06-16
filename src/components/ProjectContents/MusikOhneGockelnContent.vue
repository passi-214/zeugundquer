<script setup lang="ts">
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import {useGallery} from "@/composables/useGallery";
import Profile from "@/components/placeholder/Profile.vue";
import {computed, ref} from 'vue';
import CollapsibleGallery from "@/components/placeholder/CollapsibleGallery.vue";
import musikOhneGockelnData from "@/assets/data/musik_ohne_gockeln/musikohnegockeln_steckbrief.json"
import musikOhneGockelnContent from "@/assets/data/musik_ohne_gockeln/musik_ohne_gockeln_content.json"
import Sponsors from "@/components/placeholder/Sponsors.vue";

const sponsors = musikOhneGockelnContent.sponsor

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
      <Profile :data="musikOhneGockelnData"
      />
      <div class="h-12 sm:h-12"></div>
    </template>

    <!-- Description Section -->
    <template #description>
      <section class="flex flex-col text-left items-center px-6 py-20 text-gray-800 leading-relaxed">
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
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>


<style scoped>
/* Background pulse animation */
</style>