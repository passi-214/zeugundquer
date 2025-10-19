<script setup lang="ts">
import Profile from "@/components/placeholder/Profile.vue";
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Gallery from "@/components/placeholder/Gallery.vue";

// Low-res images
const imageModules = import.meta.glob('@/assets/images/musik_ohne_gockeln/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

// High-res images
// High-res images
const highResModules = import.meta.glob('@/assets/images/musik_ohne_gockeln/high_quality/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

const galleryImages = Object.keys(imageModules).map((lowResPath) => {
  const fileName = lowResPath.split('/').pop()!; // e.g., "Pi7compressed014_DSC04682.jpg"

  // Remove prefix
  const baseName = fileName.replace(/^Pi7compressed/, ''); // "014_DSC04682.jpg"

  // Find matching high-res image
  const highResPath = Object.entries(highResModules).find(
      ([key]) => key.endsWith(baseName)
  )?.[1];

  if (!highResPath) {
    console.warn('No high-res image found for:', fileName);
  }

  return {
    src: imageModules[lowResPath],     // low-res
    highResSrc: highResPath || '',     // high-res fallback
    alt: baseName.split('.')[0] || 'image'
  };
});
</script>



<template>
  <ProjectContentBase>
    <template #profile>
      <Profile
          title="Musik ohne Gockeln"
          foundingYear="2024"
          :projects="[
          { title: '14 Musiker:innen',
            subitems: [
              'Vokal',
              'Barockinstrumente',
              'Rezitation',
            ]
          }
        ]"
          concertsPerYear="2 Konzerte im Jahr "
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
        <!-- ✅ Left-aligned title, justified text only on larger screens -->
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <p>Wir sind ein Instrumental- und Vokalensemble aus erfahrenen Musiker:innen und jungen Musikstudierenden,
            verbunden durch unser Unwohlsein über Machtstrukturen im Musikbetrieb und unser Bedürfnis, einengende Muster
            gemeinsam aufzuspüren und zu ver-lernen.
          </p>
          <p class="pt-4">
            Das “Gockeln” in unserem Namen steht für einen Führungsstil, bei dem Geltungsbedürfnis und Machtstreben im
            Vordergrund stehen und zu Angst und wechselseitiger Abhängigkeit führen. Wir schaffen stattdessen einen
            Spiel-Raum, in dem wir auf humorvolle und scheiterfreudige Weise danach suchen, wie Kreativität sich
            entfalten kann und wir über Unterschiede und Widerstände hinweg im Kontakt bleiben können - untereinander
            und mit unserem Publikum.
          </p>
          <p class="pt-4">
            In unserem ersten Konzertprogramm “Vom Thron auf die Spielwiese” kombinieren wir barocke Musik mit kurzen
            Texten und performativen Elementen. Im Zentrum steht die Auftragskomposition “weh - le coq est mort” von
            Agnes Dorwarth.

          </p>
        </div>
      </section>
      <!-- ✅ Centered Gallery -->
      <div class="w-full px-4 sm:px-12 md:px-24 lg:px-48 pt-10">
        <h2 class="text-4xl font-semibold text-amber-700 pt-8 pb-12 text-center">
          Gallerie
        </h2>
        <Gallery :images="galleryImages"  :currentImage="null"/>
      </div>
    </template>
    <template #sponsorships>

    </template>
  </ProjectContentBase>
</template>

<style scoped>

</style>