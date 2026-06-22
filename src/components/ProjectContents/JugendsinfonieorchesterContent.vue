<script setup>

import Profile from "@/components/placeholder/Profile.vue";
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Sponsors from "@/components/placeholder/Sponsors.vue";
</script>

<template>
  <ProjectContentBase :showSponsorships="true">
  <template #profile>
      <Profile :data="jugendsinfonieorchesterData"/>
      <div class="h-12 sm:h-12"></div>

    </template>
    <template #description>
      <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <p>Das Jugendsinfonieorchester Freiburg ist ein von Jugendlichen
            initiiertes und gegründetes Ensemble. Circa 35 zwölf- bis 20-Jährige
            unterschiedlicher Leistungsniveaus spielen gemeinsam Repertoire aus der
            Zeit der Klassik bis Moderne. Alle vereint die Freude am gemeinsamen
            Musizieren, das Ziel sich musikalisch weiterzuentwickeln und in dem
            Orchester Gemeinschaft zu leben.
          </p>
          <p class="pt-8">
            Die Initiative zum Jugendsinfoieorchester Freiburg stammt von
            orchesterbegeisterten Freiburger Jugendlichen. Das Orchester wird
            einzigartig in der Freiburger Kulturlandschaft sein: Ohne Anbindung an
            eine Institution oder Schule, als musikalische Heimat, die allen
            Jugendlichen offen steht – egal auf welche Schule sie gehen oder bei wem
            sie ihren Instrumentalunterricht haben – und mit Möglichkeit der
            Selbstbestimmung für das eigene Ensemble: Das Ensemble schließt eine der
            letzten Lücken in der Freiburger Orchesterlandschaft.
          </p>
          <p class="pt-8">
            Die erste Proben- und Konzertphase findet von Januar bis April 2026
            unter der künstlerischen Leitung von Carola Christ und der
            organisatorischen Leitung von Joseph Grauel statt. Über die Zukunft des
            Orchesters werden die MitspielerInnen aus der ersten Projektphase
            entscheiden. Konsensfindung, selbständige Arbeitsaufteilung in
            Kommissionen sowie Geselligkeit während und nach den Proben wird alle
            Mitwirkenden über die Musik hinaus verbinden.
          </p>
        </div>
      </section>
    </template>
    <template #sponsorships>
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>

<style scoped>

</style>

<script>
import jugendsinfonieorchesterData from '@/assets/data/jugendsinfonieorchester/jugendsinfonieorchester_steckbrief.json';
import jugendsinfonieorchesterContent from '@/assets/data/jugendsinfonieorchester/jugendsinfonieorchester_content.json';
const sponsors = jugendsinfonieorchesterContent.sponsor
</script>